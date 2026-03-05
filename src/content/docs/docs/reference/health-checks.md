---
title: Setting Up Health Checks
---

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

If the program is online, the endpoint will return a `200 OK` status code, otherwise it will return `500 INTERNAL SERVER ERROR`.

:::tip
The time since last check in can be checked manually by an administrator in the Web App by going to `Administration > Server Stats`
:::