# hajek.no infrastructure

This independent root owns the application-hosting resources that change with
the `hajekt2/hajek.no` site:

- the existing `hajek-no` Vercel project
- `hajek.no`, `www.hajek.no`, and `hajek-no.vercel.app`
- the names of project environment variables, currently none

Environment variable values are deliberately never stored in this repository.
The Vercel API currently reports no project environment variables, so there are
no environment-variable resources to import.

## Ownership boundary

The `hajek.no` Cloudflare zone remains in
`cloud-infra/systems/cloudflare-hajek-no`. This root does not manage Cloudflare
DNS records. In particular, the apex record, the `www` CNAME, and both
`_vercel` verification records are owned and rewritten by Vercel. Enforcing
those records from either OpenTofu root would create competing controllers.

`home.hajek.no` remains controlled by pfSense Dynamic DNS in the
`hajekt2/homelab-iac` repository.

## State and credentials

The encrypted remote state uses the estate backend bucket
`ccmforge-resolve-tfstate` with the dedicated key
`hajek-no/prod/terraform.tfstate` at `hel1.your-objectstorage.com`.

Map the durable Bitwarden secrets into OpenTofu's environment without printing
their values:

| OpenTofu environment | Bitwarden secret |
|---|---|
| `AWS_ACCESS_KEY_ID` | `CCMFORGE_TOFU_STATE_ACCESS_KEY_ID` |
| `AWS_SECRET_ACCESS_KEY` | `CCMFORGE_TOFU_STATE_SECRET_ACCESS_KEY` |
| `TF_VAR_state_encryption_passphrase` | `CCMFORGE_TOFU_STATE_ENCRYPTION_PASSPHRASE` |
| `VERCEL_API_TOKEN` | `VERCEL_API_TOKEN` |

## Initialize and plan

From the repository root, after exporting the durable credentials above, run:

```bash
tofu -chdir=infra init
tofu -chdir=infra plan -input=false -var-file=prod.tfvars
```

After adoption, the only acceptable result is:

```text
No changes. Your infrastructure matches the configuration.
```

Stop on any create, update, replace, or destroy action. Do not apply a plan to
make the live project match this configuration. Correct the configuration
instead.
