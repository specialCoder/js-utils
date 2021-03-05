/**
 * 生成一个用不重复的ID
 * https://segmentfault.com/a/1190000039225617
 * @param { Number } randomLength 随机数长度，默认为3
 */
export const getUuiD = (randomLength = 3) => {
  return Number(Math.random().toString().substr(3,randomLength) + Date.now()).toString(36)
}

/** 
 * 时间长度格式化显示 
 * 161000 -> 2小时40分钟1秒
 * @param { Number} millisecond 时长（毫秒）
*/
  export const formatDuration = (millisecond) => {
    const second = Math.floor(millisecond / 1000); // second
    const s = second % 60;
    const h = Math.floor(second / 3600);
    const m = Math.floor((second - h * 3600) / 60);
    return `${h > 0 ? `${h}小时` : ''}${m > 0 ? `${m}分钟` : ''}${s > 0 ? `${s}秒` : ''}`
  }


/**
 * 复制到剪切板
 * 参考链接： 链接：https://juejin.cn/post/6844903567480848391
 */
export const toClipboard = (value,cb) => {
	const input = document.createElement('input');
  // ios 拉起键盘又瞬间收起.<input> 是只读的，就不会拉起键盘了。
  input.setAttribute('readonly', 'readonly');
  input.setAttribute('value', value);
  document.body.appendChild(input);
  // HTMLInputElement需要获取焦点后执行setSelectionRange方法才会选中
  input.focus();
  // input.select() 在ios下并没有选中全部内容，我们需要使用另一个方法来选中内容
	input.setSelectionRange(0, 9999);
	if (document.execCommand('copy')) {
    input.select()
		document.execCommand('copy');
    if(typeof cb === 'function'){
      cb();
    }
	}
  document.body.removeChild(input);
};



