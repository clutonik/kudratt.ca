# Create S3 bucket which will be used to store product images
resource "aws_s3_bucket" "product_bucket" {
  bucket = var.S3_BUCKET_NAME
  acl    = "public-read"
  tags = {
    "Name"        = "products"
    "Environment" = var.ENVIRONMENT
  }
}

# Output bucket attributes
output "product_bucket_arn" {
  value = aws_s3_bucket.product_bucket.arn
}
