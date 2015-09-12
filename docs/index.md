#SockBot Math

Math plugin for [SockBot](https://sockbot.rtfd.org/en/latest/) version 2.0.0 or later; uses the [MathJS](http://mathjs.org/docs/) library to evaluate mathematical expressions.

##Usage

SockBot Math registers the command `!math`, which takes a mathematical expression as its sole argument, and can either be part of a summons, a reply, or a private message.

Command syntax: `!math [expression]`

Example: `!math sqrt(square(3) + square(4))`

##Developers

SockBot Math is developed by [SockDrawer](https://github.com/SockDrawer) developer [RaceProUK](https://github.com/RaceProUK).

##Quickstart Guide

* Create a folder to install to
* Run `npm install sockbot`
* Run `npm install sockbot-math`
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
* Run `sockbot Config.yml`