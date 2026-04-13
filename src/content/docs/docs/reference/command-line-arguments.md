---
title: Command Line Arguments
---

:::note
This page is in development and is unfinished.
:::

ThreatHub Ingestor can be started with command line arguments to perform certain actions.

#### `--run-task`
Run a specific task on startup.

Example: `java -jar ingestor.jar --run-task=vulncatalog`

Options: 
- `vulncatalog`
- `vulnexposure`
- `vulnescalation`
- `devicecatalog`
- `devicecleanup`
- `securityrecs`
- `halosync`

:::note
These are subject to change. In the future I think there will be an interactive interface instead.
:::

View the different tasks [here](/docs/reference/scheduled-tasks). 