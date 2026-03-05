---
title: Setup HaloPSA Integration
---

ThreatHub comes with built in support for creating [HaloPSA](https://usehalo.com/halopsa) tickets.

## Create Application

1. Go to `Config > Integrations > HaloPSA API > View Applications > New`
2. Enter a name (e.g. "ThreatHub Vulnerability Notification")
3. Set **Authentication method** to **Client ID & Secret**
4. Ensure the following permissions are set:
   - `read:tickets`
   - `read:events`
   - `edit:events`
5. Copy the **Client ID** and **Client Secret**
6. Add these into the **Administration** page of **ThreatHub**

---

## Create Event Rule

1. Go to `Config > Event Management > Event Rules > New`
2. Enter a name (e.g. "Vulnerability Notification")
3. Ensure **Authorization** is set to **Halo Application**
4. On the Inputs tab, add the following inputs:

| Name            | Data Type | Value                         |
|-----------------|-----------|-------------------------------|
| Alert Type      | string    | `request^type!`               |
| Ticket Summary  | string    | `request^data^ticket^summary!`|
| Ticket Body     | string    | `request^data^ticket^details!`|
| Client ID       | string    | `request^data^clientId!`      |

5. Under Criteria, set **`request^type`** **is equal to** `VulnerabilityNotification`
6. On the Ticket Creation tab, set the following field mappings:

| Variable        | Field   |
|-----------------|---------|
| Ticket Summary  | Summary |
| Ticket Body     | Details |