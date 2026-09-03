resource "vercel_project" "site" {
  name         = var.project_name
  framework    = var.project_framework
  node_version = var.project_node_version

  git_repository = {
    type              = "github"
    repo              = var.git_repository
    production_branch = var.production_branch
  }

  lifecycle {
    prevent_destroy = true

    precondition {
      condition     = var.project_name == "hajek-no" && var.git_repository == "hajekt2/hajek.no"
      error_message = "Production must keep the hajek-no Vercel project linked to hajekt2/hajek.no."
    }
  }
}
