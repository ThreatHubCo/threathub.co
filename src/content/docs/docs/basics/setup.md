---
title: Setup
---

Once you have the ThreatHub Web App and Ingestor program installed, you can proceed with the setup.

## Setup MySQL
1. Create a MySQL user for ThreatHub and assign permissions, replacing `PASSWORD` with a strong password
```sql
CREATE USER 'threathub'@'localhost' IDENTIFIED BY 'PASSWORD';
GRANT ALL PRIVILEGES ON threathub.* TO 'threathub'@'localhost';
FLUSH PRIVILEGES;
```
2. Create another MySQL user for the report feature, replacing `PASSWORD` with a different strong password to the user you just created. Don't grant any privileges just yet.
```sql
CREATE USER 'threathub_report_user'@'localhost' IDENTIFIED BY 'PASSWORD';
```
3. Create a database
```sql
CREATE DATABASE threathub;
```
4. Select the database
```sql
USE threathub; 
```
5. We need to run a script in the Web App. Essentially, run `npm install` in the directory and then run `npm run run-migrations`
6. Now back to MySQL, run the following to grant specific permissions to the report user you created earlier. This is required to prevent malicious SQL being written into reports by users.
```sql
CREATE VIEW agents_safe AS
SELECT
  id,
  email,
  display_name,
  role,
  created_at,
  updated_at,
  deleted_at
FROM agents

GRANT SELECT ON threathub.agents_safe TO 'threathub_report_user'@'localhost';
GRANT SELECT ON threathub.devices TO 'threathub_report_user'@'localhost';
GRANT SELECT ON threathub.vulnerabilities TO 'threathub_report_user'@'localhost';
GRANT SELECT ON threathub.vulnerability_exploit_types TO 'threathub_report_user'@'localhost';
GRANT SELECT ON threathub.vulnerability_references TO 'threathub_report_user'@'localhost';
GRANT SELECT ON threathub.vulnerability_tags TO 'threathub_report_user'@'localhost';
GRANT SELECT ON threathub.vulnerability_affected_software TO 'threathub_report_user'@'localhost';
GRANT SELECT ON threathub.customers TO 'threathub_report_user'@'localhost';
GRANT SELECT ON threathub.software TO 'threathub_report_user'@'localhost';
GRANT SELECT ON threathub.customer_vulnerability_software TO 'threathub_report_user'@'localhost';
GRANT SELECT ON threathub.customer_vulnerabilities TO 'threathub_report_user'@'localhost';
GRANT SELECT ON threathub.device_notes TO 'threathub_report_user'@'localhost';
GRANT SELECT ON threathub.device_vulnerabilities TO 'threathub_report_user'@'localhost';
GRANT SELECT ON threathub.device_vulnerabilities_history TO 'threathub_report_user'@'localhost';
GRANT SELECT ON threathub.remediation_tickets TO 'threathub_report_user'@'localhost';

FLUSH PRIVILEGES;
```
7. Done! The database is set up

## Setup Web App
1. Move into the WebApp directory and install dependencies
```shell
cd /home/threathub/webapp
npm install
```
2. Create a `.env` file with contents like the following:
```shell
NEXTAUTH_SECRET=(RANDOM SECRET STRING)
MYSQL_HOST=localhost
MYSQL_PORT=3306
MYSQL_USER=threathub
MYSQL_PASSWORD=(MYSQL PASSWORD)
MYSQL_DATABASE=threathub
MYSQL_REPORT_USER=threathub_report_user
MYSQL_REPORT_PASSWORD=(MYSQL REPORT USER PASSWORD)
```

|Variable|Description|
|--------|-----------|
|`NEXTAUTH_SECRET`|A random secret string used to hash tokens and sign/encrypt session cookies. It is essential this is set to long random string|
|`MYSQL_HOST`|The address of the MySQL server. If running on the same machine it is likely `localhost` or `127.0.0.1`|
|`MYSQL_PORT`|The port of the MySQL server. By default this is 3306 and it is unlikely you will need to change it|
|`MYSQL_USER`|The username you created inside MySQL during the Setup stage for ThreatHub to use. This was likely `threathub`, but if you chose something else, please change it here|
|`MYSQL_PASSWORD`|The password for the user you created inside MySQL during the Setup stage|
|`MYSQL_DATABASE`|The name of the MySQL database you crated during the Setup stage. You likely named this `threathub` but if not please change it here|
|`MYSQL_REPORT_USER`|The username you created inside MySQL for the report user. This is likely `threathub_report_user` but if you chose something else, please change it here|
|`MYSQL_REPORT_PASSWORD`|The password for the report user in MySQL|
|`REDIS_HOST`|The address of the Redis server. If running on the same machine it is likely `localhost` or `127.0.0.1`|
|`REDIS_PORT`|The port of the MySQL server. By default this is 6379 and it is unlikely you will need to change it|
|`NEXTAUTH_URL`|The URL that the Web App will be hosted on. For example, `threathub.mycompany.com`. This is used for authentication|

3. Build the project
```shell
npm run build
```
4. That's it for now, move on to the next section

## Setup Ingestor
1. Move into the Ingestor directory 
```shell
cd /home/threathub/ingestor
```
2. Create a file named `config.properties` as shown below:
```ini
database.url=jdbc:mysql://localhost/threathub
database.username=(MYSQL USERNAME)
database.password=(MYSQL PASSWORD)
database.maxLifetime=600000
defender.baseApiUrl=https://api-eu3.securitycenter.microsoft.com
```
|Property|Description|
|--------|-----------|
|`database.url`|The URL to the MySQL database. It is in the format `jdbc:mysql://MYSQL_HOST/MYSQL_DATABASE`|
|`database.username`|The username you created inside MySQL during the Setup stage for ThreatHub to use|
|`database.password`|The password for the user you created inside MySQL during the Setup stage|
|`database.maxLifetime`|The maximum amount of time a connection in the pool is allowed to be open (in milliseconds). For advanced users|
|`defender.baseApiUrl`|The base API for the Microsoft Defender API. This is useful if you live in another part of the world outside of Europe as it gives you the ability to use a server closer to you. For advanced users|

## Setup Entra ID App
TODO

This is essentially creating an app registration in Entra ID with read permissions vulnerabilities, machines and software under WindowsDefenderATP, and setting up OAuth credentials on the same app registration (or separate if you prefer).