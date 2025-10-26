provider "aws" {
  region = var.aws_region
}

provider "aws" {
  alias  = "use1"
  region = "us-east-1"
}

provider "cloudflare" {
  api_token = var.cloudflare_api_token
}

terraform {
  required_providers {
    cloudflare = { source = "cloudflare/cloudflare" }
    aws        = { source = "hashicorp/aws" }
  }
}

module "cloudfront" {
  source = "./modules/cloudfront"
  providers = {
    aws      = aws
    aws.use1 = aws.use1
    cloudflare = cloudflare 
  }
  domain_root                 = var.domain_root
  domain_www                  = var.domain_www
  bucket_regional_domain_name = "${module.s3_website.bucket_name}.s3.${var.aws_region}.amazonaws.com"
  cloudflare_zone_id = var.cloudflare_zone_id   
}

module "s3_website" {
  source              = "./modules/s3-website"
  bucket_name         = var.bucket_name
  index_html_content  = var.index_html_content
  cloudfront_distribution_arn = module.cloudfront.distribution_arn
}

module "dns" {
  source = "./modules/dns"
  providers = { cloudflare = cloudflare }
  cloudflare_zone_id = var.cloudflare_zone_id   
  cloudfront_domain  = module.cloudfront.cloudfront_domain
}