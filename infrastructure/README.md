# Infrastructure

Infrastructure for kudratt.ca is being managed through Terraform. This allows
us to to provision/destroy aws infrastructure quickly.

## Usage

- Before you run any command in this directory, make sure you have executed
`aws configure` to setup your aws credentials.
- Run `terraform init` to setup terraform for execution.
- Run `terraform plan --var-file=staging.tfvars` to see what changes will be made. (dry-run)
- Run `terraform apply --var-file=staging.tfvars` to provision the infrastructure.
- Run `terraform destroy --var-file=staging.tfvars` to destroy the infrastructure.

`Note:` var file is required to provide the correct values for the aws. If not supplied,
terraform will prompt for the values.