---
layout: post
title: "Config OIDC in AWS iam with Terraform (for Github Actions)"
date: 2022-05-09
keywords: ",terraform,aws,iam,oidc,github,github actions,gha"
---

[MAIN REF](https://docs.github.com/en/actions/deployment/security-hardening-your-deployments/configuring-openid-connect-in-amazon-web-services)

### Terraform File

aws_iam.tf

```hcl
resource "aws_iam_openid_connect_provider" "github_actions" {
  url = "https://token.actions.githubusercontent.com"

  client_id_list = [ "sts.amazonaws.com" ]

  thumbprint_list = [ "6938fd4d98bab03faadb97b34396831e3780aea1" ]
}

resource "aws_iam_role" "github_actions" {
  name = "test-github-actions"
  assume_role_policy = jsonencode({
    Version = "2012-10-17"
    Statement = [
      {
        Action = [
          "sts:AssumeRoleWithWebIdentity",
          ]
        Effect = "Allow"
        Sid    = "GrantGithubActionsAccess"
        Principal = {
          Federated = aws_iam_openid_connect_provider.github_actions.arn
        }
        Condition = {
          StringLike = {
            "token.actions.githubusercontent.com:sub" = [for _, v in var.GITHUB_REPOS :  "repo:${v}:*"]
          }
        }
      },
    ]    
  })

  tags = {
    tag-key = "github-action-iam-role"
  }
}
```

### Github Actions Workflow File

.github/workflows/ci.yml

```yml
name: OIDC in AWS
on:  
  workflow_dispatch:

env:
  BUCKET_NAME: "auycro-test-upload"
  
jobs:
  Upload-S3:
    runs-on: ubuntu-latest
    permissions:
      id-token: write
      contents: read
    steps:
      - uses: actions/checkout@v3

      - run: sleep 5 # there's still a race condition for now

      - name: Configure AWS
        uses: aws-actions/configure-aws-credentials@v1
        with:
          aws-region: us-east-1
          role-to-assume: arn:aws:iam::632830983795:role/test-github-actions
          role-session-name: GrantGithubActionsAccess
```

other references:
- https://awsteele.com/blog/2021/09/15/aws-federation-comes-to-github-actions.html
- https://docs.github.com/en/actions/deployment/security-hardening-your-deployments/about-security-hardening-with-openid-connect
- https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles_providers_create_oidc.html
