variable "state_encryption_passphrase" {
  description = "Passphrase used to encrypt OpenTofu state and plan files."
  type        = string
  sensitive   = true

  validation {
    condition     = length(var.state_encryption_passphrase) >= 32
    error_message = "The state encryption passphrase must contain at least 32 characters."
  }
}

variable "vercel_team_id" {
  description = "Vercel team that owns the hajek-no project."
  type        = string
}

variable "vercel_project_id" {
  description = "Existing Vercel project ID used for adoption imports."
  type        = string
}

variable "project_name" {
  description = "Name of the Vercel project."
  type        = string
}

variable "project_framework" {
  description = "Framework selected for the Vercel project."
  type        = string
}

variable "project_node_version" {
  description = "Node.js version used by Vercel builds."
  type        = string
}

variable "git_repository" {
  description = "GitHub repository connected to the Vercel project."
  type        = string
}

variable "production_branch" {
  description = "Git branch deployed to production."
  type        = string
}

variable "project_domains" {
  description = "Domains attached to the Vercel project."
  type        = set(string)
}

variable "environment_variable_names" {
  description = "Names of project environment variables observed in Vercel. Values are never stored here."
  type        = set(string)
}
