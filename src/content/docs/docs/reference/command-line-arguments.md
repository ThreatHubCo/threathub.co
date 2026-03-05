---
title: Command Line Arguments
---

:::note
This page is in development and is unfinished.
:::

ThreatHub Ingestor can be started with command line arguments to perform certain actions.

#### `--run-scheduler`
Run a specific sheduler on startup.

Example: `java -jar ingestor.jar --run-scheduler=vulncatalog`

Options: 
- `vulncatalog`
- `vulnexposure`
- `vulnescalation`
- `devicecatalog`
- `securityrecommendations`
- `halosync`

NOTE: These are subject to change.