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
2. Create a database
```sql
CREATE DATABASE threathub;
```
3. Select the database
```sql
USE threathub; 
```
4. Copy the contents of `/home/threathub/webapp/init.sql` and paste it into the MySQL console
5. Done! The database is set up

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
MYSQL_USER=(MYSQL USERNAME)
MYSQL_PASSWORD=(MYSQL PASSWORD)
MYSQL_DATABASE=threathub
REDIS_HOST=localhost
REDIS_PORT=6379
NEXTAUTH_URL=(YOUR WEBSITE URL)
```
|Variable|Description|
|--------|-----------|
|`NEXTAUTH_SECRET`|A random secret string used to hash tokens and sign/encrypt session cookies. It is essential this is set to long random string|
|`MYSQL_HOST`|The address of the MySQL server. If running on the same machine it is likely `localhost` or `127.0.0.1`|
|`MYSQL_PORT`|The port of the MySQL server. By default this is 3306 and it is unlikely you will need to change it|
|`MYSQL_USER`|The username you created inside MySQL during the Setup stage for ThreatHub to use|
|`MYSQL_PASSWORD`|The password for the user you created inside MySQL during the Setup stage|
|`MYSQL_DATABASE`|The name of the MySQL database you crated during the Setup stage. You likely named this `threathub` but if not please change it here|
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