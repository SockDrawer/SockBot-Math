<a name="module_Math"></a>
## Math
Math

**Author:** RaceProUK  
**License**: MIT  

* [Math](#module_Math)
  * [.prepare(plugConfig, config, events, browser)](#module_Math.prepare)
  * [.start()](#module_Math.start)
  * [.stop()](#module_Math.stop)
  * [.doMath(command)](#module_Math.doMath) ⇒ <code>string</code>

<a name="module_Math.prepare"></a>
### Math.prepare(plugConfig, config, events, browser)
Prepare Plugin prior to login

**Kind**: static method of <code>[Math](#module_Math)</code>  

| Param | Type | Description |
| --- | --- | --- |
| plugConfig | <code>\*</code> | Plugin specific configuration |
| config | <code>SockBot.Config</code> | Overall bot configuration |
| events | <code>SockBot.Events.SockEvents</code> | EventEmitter used for the bot |
| browser | <code>SockBot.Browser</code> | Web browser for communicating with discourse |

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
| command | <code>SockBot.Commands.Command</code> | Notification recieved |

