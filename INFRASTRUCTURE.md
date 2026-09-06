# INFRASTRUCTURE WARNING

Before changing GitHub remotes, hosting, deployment settings, DNS, domains, or site ownership:

**READ `~/Projects/INFRASTRUCTURE-REGISTRY.md` FIRST.**

Do not infer infrastructure state from:

* project names
* prior chat history
* `.netlify` local metadata
* cached CLI status
* existing URLs
* build settings alone

Identify the canonical deployment using the hosting account/team AND immutable site/project ID.

Continuous deployment is only verified by:

`Git push → automatic provider build → matching deployed commit SHA`

If the registry conflicts with live infrastructure, STOP, document the discrepancy, and resolve which state is canonical before making changes.

Do not create duplicate sites as a workaround.
