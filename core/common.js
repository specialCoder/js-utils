/**
 * 生成一个用不重复的ID
 * https://segmentfault.com/a/1190000039225617
 * @param { Number } randomLength 随机数长度，默认为3
 */
export const getUuiD = (randomLength = 3) => {
  return Number(Math.random().toString().substr(3,randomLength) + Date.now()).toString(36)
}

