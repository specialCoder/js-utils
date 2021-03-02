/**
 * 千分位格式化 123214.22 -> 123,214.22
 * https://observablehq.com/@specialcoder/javascript/2?collection=@specialcoder/untitled/2
 * @param {Number} num 
 */
export const ToThounds = (num) =>{
  if ((num || '').toString().indexOf('.') !== -1) {
    return num.toLocaleString();
  }
  const pattern = /(\d)(?=(?:\d{3})+$)/g;
  return num ? (num || '').toString().replace(pattern, '$1,') : `${num}`;
}