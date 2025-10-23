# Point root and www to CloudFront
resource "cloudflare_record" "root_cname" {
	zone_id = data.cloudflare_zone.this.id
	name    = "@"
	type    = "CNAME"
	content = aws_cloudfront_distribution.site.domain_name
	ttl     = 300
	proxied = false   # start with DNS-only (gray); turn true later if you want Cloudflare proxy
}

resource "cloudflare_record" "www_cname" {
	zone_id = data.cloudflare_zone.this.id
	name    = "www"
	type    = "CNAME"
	content = aws_cloudfront_distribution.site.domain_name
	ttl     = 300
	proxied = false
}

# Optional: Redirect www -> root (or vice versa) using Cloudflare rules
# Example: www -> root
# resource "cloudflare_ruleset" "redirect_www_to_root" {
#   zone_id     = data.cloudflare_zone.this.id
#   name        = "Redirect www to root"
#   kind        = "zone"
#   phase       = "http_request_dynamic_redirect"
#   rules {
#     expression = "(http.host eq \"www.${var.domain_root}\")"
#     action = "redirect"
#     action_parameters {
#       from_value { status_code = 301
#                    target_url { value = "https://${var.domain_root}/" } }
#     }
#   }
# }
