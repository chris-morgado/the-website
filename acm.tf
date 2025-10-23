resource "aws_acm_certificate" "site" {
	provider          = aws.use1
	domain_name       = var.domain_root
	subject_alternative_names = [var.domain_www]
	validation_method = "DNS"
}

# Cloudflare zone
data "cloudflare_zone" "this" {
	name = var.cloudflare_zone_name
}

# ACM DNS validation records in Cloudflare
resource "cloudflare_record" "acm_validation" {
	for_each = {
		for dvo in aws_acm_certificate.site.domain_validation_options :
		dvo.domain_name => {
			name   = dvo.resource_record_name
			type   = dvo.resource_record_type
			value  = dvo.resource_record_value
		}
	}
	zone_id = data.cloudflare_zone.this.id
	name    = each.value.name
	type    = each.value.type
	content = each.value.value
	ttl     = 300
}

resource "aws_acm_certificate_validation" "site" {
	provider                = aws.use1
	certificate_arn         = aws_acm_certificate.site.arn
	validation_record_fqdns = [for r in cloudflare_record.acm_validation : r.hostname]
}
