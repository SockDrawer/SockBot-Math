<a name="module_Math"></a>
## Math
Math

**Author:** RaceProUK  
**License**: MIT  

* [Math](#module_Math)
  * [.prepare(plugConfig, config, events, browser)](#module_Math.prepare)
  * [.start()](#module_Math.start)
  * [.stop()](#module_Math.stop)
  * [.handler(notification, topic, post)](#module_Math.handler)

<a name="module_Math.prepare"></a>
### Math.prepare(plugConfig, config, events, browser)
Prepare Plugin prior to login

**Kind**: static method of <code>[Math](#module_Math)</code>  

| Param | Type | Description |
| --- | --- | --- |
| plugConfig | <code>\*</code> | Plugin specific configuration |
| config | <code>Config</code> | Overall bot configuration |
| events | <code>externals.events.SockEvents</code> | EventEmitter used for the bot |
| browser | <code>Browser</code> | Web browser for communicating with discourse |

<a name="module_Math.start"></a>
### Math.start()
Start the plugin after login

**Kind**: static method of <code>[Math](#module_Math)</code>  
<a name="module_Math.stop"></a>
### Math.stop()
Stop the plugin prior to exit or reload

**Kind**: static method of <code>[Math](#module_Math)</code>  
<a name="module_Math.handler"></a>
### Math.handler(notification, topic, post)
Handle notifications

**Kind**: static method of <code>[Math](#module_Math)</code>  

| Param | Type | Description |
| --- | --- | --- |
| notification | <code>external.notifications.Notification</code> | Notification recieved |
| topic | <code>external.topics.Topic</code> | Topic trigger post belongs to |
| post | <code>external.posts.CleanedPost</code> | Post that triggered notification |

