import {
  to = vercel_project.site
  id = var.vercel_project_id
}

import {
  for_each = var.project_domains
  to       = vercel_project_domain.site[each.value]
  id       = "${var.vercel_project_id}/${each.value}"
}
