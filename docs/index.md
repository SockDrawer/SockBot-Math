#SockBot Math

Math plugin for [SockBot](https://sockbot.rtfd.org/en/latest/).

##Developers

SockBot Math is developed by [SockDrawer](https://github.com/SockDrawer) developer [RaceProUK](https://github.com/RaceProUK).

##Quickstart Guide

* Create a folder to install SockBot to
* Execute the following commands in that folder:
<br/>`npm install sockbot`
<br/>`npm install sockbot-math`
* Create a configuration file called `Config.yml` in that folder with the following contents:
```
---
core:
  username: [the bot's username]
  password: [the bot's password]
  owner: [your username]
plugins:
  sockbot-math: true
```
* Run `npm start Config.yml`