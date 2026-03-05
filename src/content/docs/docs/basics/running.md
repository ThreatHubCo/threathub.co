---
title: Running ThreatHub
---

Running ThreatHub is easy. In the future it will likely be using Docker.

The following may work to automatically start both apps in separate background screens:
```shell
screen -dmS threathub-ingestor bash -c "cd /home/threathub/ingestor && java -jar threathub-ingestor*.jar"
screen -dmS threathub-webapp bash -c "cd /home/threathub/webapp && npm start"
```
Note: If you installed Node.js via nvm and the above doesn't work, you may need to add something like `source /root/.nvm/nvm.sh && ` before `cd` to load nvm.

---
  
If the above fails, you can do it manually:
- Ingestor:
  1. Run `screen -S threathub-ingestor`
  2. Change to the ingestor directory like `cd /home/threathub/ingestor`
  3. Run the jar with `java -jar threathub-ingestor*.jar`
  4. On your keyboard, to detach from the screen, type CTRL+A and then the letter D (without CTRL)
- Web App
  1. Run `screen -S threathub-webapp`
  2. Change to the web app directory like `cd /home/threathub/webapp`
  3. Run the program with `npm start`

### I need to run the Web App on a different port!
No problem, add `PORT=(your port number)` to the .env file