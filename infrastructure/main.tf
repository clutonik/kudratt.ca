terraform {
  backend "s3" {
    bucket         = "kudratt.ca-devops-staging-tf-state"
    key            = "kudratt-ca.tfstate"
    region         = "us-east-1"
    encrypt        = true
    dynamodb_table = "kudratt.ca-devops-staging-tf-state-lock"
  }
}
