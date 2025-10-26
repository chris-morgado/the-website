variable "aws_region" {
  type    = string
  default = "us-east-1"
}

variable "bucket_name" {
  type    = string
  default = "chrismorgados-the-website"
}

variable "index_html_content" {
  type    = string
  default = "<!doctype html><html><head><meta charset='utf-8'><title>It works</title></head><body><h1>It works 🎉</h1></body></html>"
}
variable "domain_root" {
  type    = string
  default = "chrismorgado.com"
}
variable "domain_www" {
  type    = string
  default = "www.chrismorgado.com"
}
variable "cloudflare_zone_name" {
  type    = string
  default = "chrismorgado.com"
}
variable "cloudflare_api_token" {
  type = string
}
variable "cloudflare_zone_id" {
  type    = string
  default = "323449e26ea5be6bbdcddd84159e6882"
}
