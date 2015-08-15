#Configuration

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