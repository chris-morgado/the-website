variable "bucket_name" {
  type    = string
  default = "chrismorgados-the-website"
}

variable "index_html_content" {
  type    = string
  default = "<!doctype html><html><head><meta charset='utf-8'><title>The Website</title></head><body><h1>The Website works! 🎉</h1></body></html>"
}

variable "cloudfront_distribution_arn" {
  type = string
}