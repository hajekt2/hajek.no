resource "vercel_project_domain" "site" {
  for_each = var.project_domains

  project_id = vercel_project.site.id
  domain     = each.value

  lifecycle {
    prevent_destroy = true
  }
}
