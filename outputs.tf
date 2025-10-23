output "cloudfront_domain" { value = aws_cloudfront_distribution.site.domain_name }
output "website_endpoint" {
	value       = aws_s3_bucket_website_configuration.site.website_endpoint
	description = "Open this URL in your browser"
}
output "bucket_name" { value = aws_s3_bucket.site.bucket }
