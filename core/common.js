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

