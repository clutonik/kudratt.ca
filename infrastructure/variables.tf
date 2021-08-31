variable "ENVIRONMENT" {
  type        = string
  description = "project environment being provisioned/managed"
}

variable "AWS_REGION" {
  type        = string
  description = "AWS region to use"
  default     = "us-east-1"
}

variable "AWS_AMIS" {
  type        = map(string)
  description = "AWS AMIs to use for each region"
  default = {
    "us-east-1" = "ami-0c2b8ca1dad447f8a" # Amazon Linux 2 - HVM (x86_64)
  }
}
variable "S3_BUCKET_NAME" {
  type        = string
  description = "S3 bucket name to provision"
}
