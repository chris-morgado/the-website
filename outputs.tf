output "cloudfront_domain" { value = module.cloudfront.cloudfront_domain }
output "website_endpoint"  { value = module.s3_website.website_endpoint }
output "bucket_name"       { value = module.s3_website.bucket_name }