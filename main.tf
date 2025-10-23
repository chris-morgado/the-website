# Create the bucket
resource "aws_s3_bucket" "site" {
	bucket = var.bucket_name
}

# Required with modern S3: no ACLs; bucket-owner enforced
resource "aws_s3_bucket_ownership_controls" "site" {
	bucket = aws_s3_bucket.site.id
	rule {
		object_ownership = "BucketOwnerEnforced"
	}
}

# Allow public policy to take effect (turn OFF the two policy blocks)
resource "aws_s3_bucket_public_access_block" "site" {
	bucket                  = aws_s3_bucket.site.id
	block_public_acls       = true
	ignore_public_acls      = true
	block_public_policy     = false
	restrict_public_buckets = false
}

# Enable static website hosting
resource "aws_s3_bucket_website_configuration" "site" {
	bucket = aws_s3_bucket.site.id
	index_document {
		suffix = "index.html"
	}
	error_document {
		key = "error.html"
	}
}

# Public read policy (website-style)
data "aws_iam_policy_document" "public_read" {
	statement {
		sid     = "PublicReadGetObject"
		effect  = "Allow"
		actions = ["s3:GetObject"]
		principals {
			type        = "AWS"
			identifiers = ["*"]
		}
		resources = ["${aws_s3_bucket.site.arn}/*"]
	}
}

resource "aws_s3_bucket_policy" "public_read" {
	bucket = aws_s3_bucket.site.id
	policy = data.aws_iam_policy_document.public_read.json

	# Ensure the Public Access Block is created first
	depends_on = [aws_s3_bucket_public_access_block.site]
}

resource "aws_s3_object" "index_html" {
	bucket       = aws_s3_bucket.site.id
	key          = "index.html"
	content_type = "text/html"
	content      = var.index_html_content
}

resource "aws_s3_object" "error_html" {
	bucket       = aws_s3_bucket.site.id
	key          = "error.html"
	content_type = "text/html"
	content      = "<!doctype html><html><body><h1>Not found</h1></body></html>"
}

terraform {
  required_version = ">= 1.5.0"

  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "~> 6.17"       # or keep what you already use
    }
    cloudflare = {
      source  = "cloudflare/cloudflare"
      version = "~> 4.0"        # or pin a specific version if you want
    }
  }
}
