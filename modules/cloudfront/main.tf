terraform {
  required_providers {
    aws = {
      source                = "hashicorp/aws"
      configuration_aliases = [aws.use1]
    }
    cloudflare = {
      source = "cloudflare/cloudflare"
    }
  }
}

resource "aws_cloudfront_function" "dir_index" {
  name    = "append-index-html"
  runtime = "cloudfront-js-1.0"
  publish = true
  comment = "Rewrite URLs like /foo -> /foo/index.html"
  code = <<-EOF
function handler(event) {
  var req = event.request;
  var uri = req.uri;

  // If the URI has no file extension, serve index.html
  if (!uri.includes('.')) {
    if (uri.endsWith('/')) {
      req.uri += 'index.html';
    } else {
      req.uri += '/index.html';
    }
  }
  return req;
}
EOF
}

resource "aws_cloudfront_origin_access_control" "oac" {
  name                              = "site-oac"
  origin_access_control_origin_type = "s3"
  signing_behavior                  = "always"
  signing_protocol                  = "sigv4"
}

resource "aws_acm_certificate" "site" {
  provider                  = aws.use1
  domain_name               = var.domain_root
  subject_alternative_names = [var.domain_www]
  validation_method         = "DNS"
  lifecycle { create_before_destroy = true }
}

# Publish the ACM validation CNAMEs (must be DNS-only / not proxied)
resource "cloudflare_dns_record" "acm_validation" {
  for_each = {
    for dvo in aws_acm_certificate.site.domain_validation_options :
    dvo.domain_name => {
      name  = dvo.resource_record_name
      type  = dvo.resource_record_type
      value = dvo.resource_record_value
    }
  }

  zone_id = var.cloudflare_zone_id
  name    = each.value.name
  type    = each.value.type
  content = each.value.value
  ttl     = 60
  proxied = false
}

resource "aws_acm_certificate_validation" "site" {
  provider        = aws.use1
  certificate_arn = aws_acm_certificate.site.arn

  validation_record_fqdns = [
    for dvo in aws_acm_certificate.site.domain_validation_options :
    dvo.resource_record_name
  ]

  depends_on = [cloudflare_dns_record.acm_validation]
}

resource "aws_cloudfront_distribution" "site" {
  enabled             = true
  default_root_object = "index.html"
  aliases             = [var.domain_root, var.domain_www]

  origin {
    domain_name              = var.bucket_regional_domain_name
    origin_id                = "s3-origin"
    origin_access_control_id = aws_cloudfront_origin_access_control.oac.id
  }

  default_cache_behavior {
    target_origin_id       = "s3-origin"
    viewer_protocol_policy = "redirect-to-https"
    allowed_methods        = ["GET", "HEAD"]
    cached_methods         = ["GET", "HEAD"]

    forwarded_values {
      query_string = false
      cookies { forward = "none" }
    }

    function_association {
      event_type   = "viewer-request"
      function_arn = aws_cloudfront_function.dir_index.arn
    }
  }

  custom_error_response {
    error_code             = 403
    response_code          = 404
    response_page_path     = "/404.html"
    error_caching_min_ttl  = 0
  }
  custom_error_response {
    error_code             = 404
    response_code          = 404
    response_page_path     = "/404.html"
    error_caching_min_ttl  = 0
  }

  restrictions {
    geo_restriction { restriction_type = "none" }
  }

  viewer_certificate {
    acm_certificate_arn      = aws_acm_certificate.site.arn
    ssl_support_method       = "sni-only"
    minimum_protocol_version = "TLSv1.2_2021"
  }

  depends_on = [aws_acm_certificate_validation.site] # certificate needs to wait for validation 
}