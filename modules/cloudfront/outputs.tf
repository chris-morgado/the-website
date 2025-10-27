output "cloudfront_domain" {
  value = aws_cloudfront_distribution.site.domain_name
}

output "distribution_arn" {
  value = aws_cloudfront_distribution.site.arn
}

output "cloudfront_id" {
  value = aws_cloudfront_distribution.site.id
}

output "acm_certificate_arn" {
  value = aws_acm_certificate.site.arn
}