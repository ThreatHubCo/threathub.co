---
title: Scheduled Tasks
---

:::note
This page is in development and is unfinished.
:::

| Task                          | Period                     | Description |
|-------------------------------|-----------------------------|-------------|
| Full Catalog Sync             | Daily at 2am                | Syncs the entire Defender vulnerability library                    |
| Tenant Data Sync              | Daily at 3am                | Syncs vulnerability information for each tenant                    |
| Security Recommendations Sync | Daily at 5am                | Syncs security recommendations for each tenant                     |
| Halo Sync                     | Every 2 hours               | Syncs Halo ticket info to determine last updated time and status   |
| Vulnerability Escalation Sync | Every 6 hours               |                                                                    |
| Device Catalog Sync           | Daily at 9:30am and 2pm     | Syncs all devices in Defender with the local database              |
| Device Cleanup                | Daily at 6am                | Removes all devices that are no longer Entra Joined                |