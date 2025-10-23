resource "aws_cloudfront_origin_access_control" "oac" {
	name                              = "site-oac"
	origin_access_control_origin_type = "s3"
	signing_behavior                  = "always"
	signing_protocol                  = "sigv4"
}

data "aws_s3_bucket" "site" {
	bucket = var.bucket_name
}

resource "aws_cloudfront_distribution" "site" {
	enabled             = true
	default_root_object = "index.html"

	aliases = [var.domain_root, var.domain_www]

	origin {
		domain_name              = data.aws_s3_bucket.site.bucket_regional_domain_name
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

			cookies {
				forward = "none"
			}
		}
	}

	# Optional: support deep-linking for SPAs
	# custom_error_response {
	# 	error_code         = 404
	# 	response_code      = 200
	# 	response_page_path = "/index.html"
	# }
	# custom_error_response {
	# 	error_code         = 403
	# 	response_code      = 200
	# 	response_page_path = "/index.html"
	# }

	viewer_certificate {
		acm_certificate_arn      = aws_acm_certificate.site.arn
		ssl_support_method       = "sni-only"
		minimum_protocol_version = "TLSv1.2_2021"
	}

	restrictions {
		geo_restriction {
			restriction_type = "none"
		}
	}

	# price_class = "PriceClass_100" # optional: cheaper edge locations
}

data "aws_iam_policy_document" "site_bucket" {
	statement {
		sid = "AllowCloudFrontAccess"

		principals {
			type        = "Service"
			identifiers = ["cloudfront.amazonaws.com"]
		}

		actions   = ["s3:GetObject"]
		resources = ["${data.aws_s3_bucket.site.arn}/*"]

		condition {
			test     = "StringEquals"
			variable = "AWS:SourceArn"
			values   = [aws_cloudfront_distribution.site.arn]
		}
	}
}

resource "aws_s3_bucket_policy" "site" {
	bucket = data.aws_s3_bucket.site.id
	policy = data.aws_iam_policy_document.site_bucket.json
}
