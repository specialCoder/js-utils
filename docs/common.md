# common
## formatDuration
+ 描述：时间长度格式化显示,如：161000 -> 2小时40分钟1秒
+ 类型：
```js
(millisecond:Number) => String
```
+ 参数：
  - @param { Number } millisecond 毫秒

## toClipboard
+ 描述：复制到剪切板
+ 类型：
```js
(content:String,cb:Function) => void
```
+ 参数：
  - @param { String } content 内容
  - @param { Function } cb 复制成功之后的回调函数