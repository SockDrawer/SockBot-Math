[![Coverage Status](https://coveralls.io/repos/SockDrawer/SockBot-Math/badge.svg?branch=master)](https://coveralls.io/r/SockDrawer/SockBot-Math?branch=master)
[![Docs Status](https://readthedocs.org/projects/sockbot-math/badge/?version=latest)](http://sockbot-math.readthedocs.org/)

# SockBot Math

Math plugin for [SockBot](https://github.com/SockDrawer/SockBot) version 2.0.0 or later; uses the [MathJS](http://mathjs.org/docs/) library to evaluate mathematical expressions.

## Usage

SockBot Math registers the command `!math`, which takes a mathematical expression as its sole argument, and can either be part of a summons, a reply, or a private message.

Command syntax: `!math [expression]`

Example: `!math sqrt(square(3) + square(4))`

## Developers

SockBot Math is developed by [SockDrawer](https://github.com/SockDrawer) developer [RaceProUK](https://github.com/RaceProUK).

## Installation

The preferred method of installation is via NPM; simply run this command within the SockBot installation folder:
```
npm install sockbot-math
```

Other methods of installation are possible e.g. cloning the git repository, but only installation via NPM is supported.

### Post Install Setup

If you installed via NPM skip this step as NPM has already installed all necessary dependencies.
Otherwise you will need to run the following command in the folder where you installed SockBot Math:
```
npm install
```

## Configuration

SockBot Math requires no special configuration; all that is needed is a single line in the SockBot configuration file.

YAML example:
```
---
core:
  username: username
  password: password
  owner: owner
plugins:
  sockbot-math: true
```

JSON example:
```
{
  "core": {
    "username": "username",
    "password": "password",
    "owner": "owner"
  },
  "plugins": {
    "sockbot-math": true
  }
}
```

Note that these examples assume an NPM-based installation; other installation methods may require the path to `Math.js` (without file extension) be specified explicitly.

YAML example:
```
---
core:
  username: username
  password: password
  owner: owner
plugins:
  '../path/to/Math': true
```

JSON example:
```
{
  "core": {
    "username": "username",
    "password": "password",
    "owner": "owner"
  },
  "plugins": {
    "../path/to/Math": true
  }
}
```

## Special Thanks

For creating [SockBot](https://github.com/SockDrawer/SockBot) and just generally being awesome: [Accalia de Elementia](https://github.com/AccaliaDeElementia)
