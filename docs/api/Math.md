<a name="module_Math"></a>
## Math
Math plugin for [SockBot](https://sockbot.rtfd.org/en/latest/)

**Author:** RaceProUK  
**License**: MIT  

* [Math](#module_Math)
  * [.prepare(pluginConfig, botConfig, events, browser)](#module_Math.prepare)
  * [.start()](#module_Math.start)
  * [.stop()](#module_Math.stop)
  * [.doMath(command)](#module_Math.doMath) ⇒ <code>string</code>

<a name="module_Math.prepare"></a>
### Math.prepare(pluginConfig, botConfig, events, browser)
Prepare plugin prior to login

**Kind**: static method of <code>[Math](#module_Math)</code>  

| Param | Type | Description |
| --- | --- | --- |
| pluginConfig | <code>\*</code> | Plugin specific configuration |
| botConfig | <code>SockBot.Config</code> | Overall bot configuration (see [SockBot docs](https://sockbot.rtfd.org/en/latest/api/lib/config/) for more details) |
| events | <code>SockBot.SockEvents</code> | EventEmitter used for the bot (see [SockBot docs](https://sockbot.rtfd.org/en/latest/api/external/events/#module_SockEvents) for more details) |
| browser | <code>SockBot.Browser</code> | Web browser for communicating with discourse (see [SockBot docs](https://sockbot.rtfd.org/en/latest/api/lib/browser/) for more details) |

<a name="module_Math.start"></a>
### Math.start()
Start the plugin after login

**Kind**: static method of <code>[Math](#module_Math)</code>  
<a name="module_Math.stop"></a>
### Math.stop()
Stop the plugin prior to exit or reload

**Kind**: static method of <code>[Math](#module_Math)</code>  
<a name="module_Math.doMath"></a>
### Math.doMath(command) ⇒ <code>string</code>
Parse and evaluate the supplied methematical expression

**Kind**: static method of <code>[Math](#module_Math)</code>  
**Returns**: <code>string</code> - The result of executing the command  

| Param | Type | Description |
| --- | --- | --- |
| command | <code>SockBot.Command</code> | Notification recieved (see [SockBot docs](https://sockbot.rtfd.org/en/latest/api/lib/commands/#module_commands..command) for more details) |

