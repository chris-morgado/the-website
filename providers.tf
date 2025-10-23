provider "aws" {
	region = var.aws_region
}

# Cloudflare (use API token with DNS edit perms)
provider "cloudflare" {
	api_token = var.cloudflare_api_token
}

# CloudFront certs in us-east-1
provider "aws" {
	alias  = "use1"
	region = "us-east-1"
}

