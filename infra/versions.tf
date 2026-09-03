terraform {
  required_version = "~> 1.12.0"

  backend "s3" {
    bucket = "ccmforge-resolve-tfstate"
    key    = "hajek-no/prod/terraform.tfstate"
    region = "eu-central"

    endpoints = {
      s3 = "https://hel1.your-objectstorage.com"
    }

    use_lockfile                = true
    use_path_style              = true
    skip_credentials_validation = true
    skip_metadata_api_check     = true
    skip_region_validation      = true
    skip_requesting_account_id  = true
    skip_s3_checksum            = true
  }

  required_providers {
    vercel = {
      source  = "vercel/vercel"
      version = "= 5.14.0"
    }
  }

  encryption {
    key_provider "pbkdf2" "state" {
      passphrase               = var.state_encryption_passphrase
      encrypted_metadata_alias = "hajek-no-vercel-state-v1"
    }

    method "aes_gcm" "state" {
      keys = key_provider.pbkdf2.state
    }

    state {
      method   = method.aes_gcm.state
      enforced = true
    }

    plan {
      method   = method.aes_gcm.state
      enforced = true
    }
  }
}
