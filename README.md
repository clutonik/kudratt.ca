# kudratt.ca
Project to manage code for kudratt.ca

# Table of Contents

- [Directory Structure](#directory-structure)
- [Contributing](#contributing)


## Directory Stucture

- [app](app)
  - [models](app/models)
  - [api](app/api)
  - [schemas](app/schemas)
  - [static](app/static)
  - [tests](app/tests)
- [designs](designs)
  - [xml](designs/xml)
  - [img](designs/img)
- [infrastructure](infrastructure)
- [Makefile](Makefile)
- [main.py](app/main.py)

# Contributing

If you want to be a part of this project, please feel free to open an issue and describe your interest.

For team members, who are already part of this project will have an AWS IAM account created for
them. If you have an IAM account and have never used it before, follow the instructions below:

- Log in to your AWS account which will ask you to reset your password.
- Add MFA authentication to your account. [Steps](https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_mfa_enable_virtual.html)
- Create AWS Secret Key. [Steps](https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_access-keys.html#Using_CreateAccessKey)
- **DO NOT SAVE YOUR ACCESS/SECRET KEY TO DISK BY DOWNLOADING CSV FILE FROM AWS**
- Download aws-vault on your machine.
  - For mac, run `brew install aws-vault`
- Add your secret key to your macbook keychain using aws-vault.
  - `command`: `aws-vault add <your-username>@<account-alias>`
  - e.g. `aws-vault add tom@tom-kudratt`
  Note: This helps in identifying which profile to use when running aws-vault commands.
- Update your `~/.aws/config` file with your new profile by adding below lines:
  - Look for your profile name you added in the step above.
  - specify region: e.g. `region=us-east-1`
  - add mfa_arn: e.g. `mfa_serial=arn:aws:iam::<account-id>:mfa/<your-username>`
  - Save file.
- Run below command to create a ephemeral token to work with your profile.
  - Command: `aws-vault exec <profile-name> --duration=1h`
  - Notes: 
    - This will ask you to enter your MFA code from your virtual/physical MFA device.
    - This will create a temporary token for your profile which will expire in 1 hour.
    - This token is only valid for the terminal you are currently in.
    - This command will save your emphermal token to your keychain (which might ask for your password).