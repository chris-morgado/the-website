terraform {
  required_providers {
    cloudflare = {
      source  = "cloudflare/cloudflare"
      version = "~> 5.0.0" 
    }
  }
}

# Root (@) -> CloudFront
resource "cloudflare_dns_record" "root" {
  zone_id = var.cloudflare_zone_id
  name    = "@"
  type    = "CNAME"
  content = var.cloudfront_domain  
  proxied = false
  ttl     = 1
}

# www -> CloudFront
resource "cloudflare_dns_record" "www_cname" {
  zone_id = var.cloudflare_zone_id
  name    = "www"
  type    = "CNAME"
  content = var.cloudfront_domain
  proxied = false
  ttl     = 1
}

output "root_record_id" { value = cloudflare_dns_record.root.id }