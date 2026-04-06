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

NOTE: These are subject to change. In the future I think there will be an interactive interface instead.

Here's the ingestor tasks:

| Task                          | Period                     | Description |
|-------------------------------|-----------------------------|-------------|
| Full Catalog Sync             | Daily at 2am                | Syncs the entire Defender vulnerability library                    |
| Tenant Data Sync              | Daily at 3am                | Syncs vulnerability information for each tenant                    |
| Security Recommendations Sync | Daily at 5am                | Syncs security recommendations for each tenant                     |
| Halo Sync                     | Every 2 hours               | Syncs Halo ticket info to determine last updated time and status   |
| Vulnerability Escalation Sync | Every 6 hours               |                                                                    |
| Device Catalog Sync           | Daily at 9:30am and 2pm     | Syncs all devices in Defender with the local database              |
| Device Cleanup                | Daily at 6am                | Removes all devices that are no longer Entra Joined                |

ThreatHub Ingestor health can be checked via the `/api/health/ingestor` endpoint on the Web App, which returns a response like:

```json
{
  "status": true,
  "lastCheckIn": "2026-02-27T16:41:14.271Z",
  "age": 27572,
  "ageText": "30 seconds ago"
}
```

|Property|Description|
|--------|-----------|
|`status`|A boolean value indicating whether the program is online|
|`lastCheckIn`|The ISO 8601 timestamp when the program last checked in|
|`age`|The time in milliseconds since the program last checked in|
|`ageText`|The human readable time since the program last checked in|
