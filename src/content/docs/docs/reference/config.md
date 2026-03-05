---
title: Admin Configuration
---

This page describes each setting on the `Administration > Config` page in the Web App.

## Ticket System

### Enable Ticketing
Enabling this will allow automatic ticket escalations to happen and allow agents to manually create tickets from the interface.

### Platform
Currently only `None` or `HaloPSA`. Support for more platforms will come in the future.

### URL
The URL of the ticket platform, e.g. `https://example.halopsa.com`.

### Client ID
The Client ID for the OAuth app that allows ThreatHub to access the API of the ticket system.

### Client Secret
The Client Secret for the OAuth app that allows ThreatHub to access the API of the ticket system.

### Minimum CVE Severity for Esclation
If automatic ticket escalation is enabled for some software / clients, then this setting will determine what the minimum requirements for raising a ticket actually are. 

Tickets will only be raised if the severity is equal to or higher the one specified here. For example, if you set it to High (default) then you will only receive ticket escalations for software where at least 1 CVE has the severity High or Critical.

### Minimum Time Before Escalation
The minimum amount of time in days before automatically creating a ticket.

### Escalate Public Exploit Immediately
If enabled, software where at least one CVE has a public exploit will be escalating immediately regardless of minimum wait time.

---

## Microsoft Details

### Enable Microsoft Authentication
Enabling this will allow users to log in with Microsoft Entra ID.

### Home Tenant ID
The Microsoft Tenant ID of your organisation (where the OAuth app will be located).

### Entra Client ID (Auth App)
The Client ID for the OAuth app used for authentication. If you want to use one OAuth app for both auth and the Defender API, simply set this to the same as the Defender API Client ID & Secret below.

### Entra Client Secret (Auth App)
The Client Secret for the OAuth app used for authentication. If you want to use one OAuth app for both auth and the Defender API, simply set this to the same as the Defender API Client ID & Secret below.

### Entra Client ID (Defender API)
The Client ID for the OAuth app used for access to the Microsoft Defender API.

### Entra Client Secret (Defender API)
The Client Secret for the OAuth app used for access to the Microsoft Defender API.

---

## Miscellaneous

### Enable Password Authentication
Enabling this will allow agents to sign in with an email and password.

### Site URL
The URL of the Web App, e.g. https://threathub.mycompany.com. This is used for direct links in tickets.