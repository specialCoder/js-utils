/**
 * [{label:'label',value:'value'}] -> {'value':'label'}
 * @param { {label:String, value:String|Number}[] } arr 
 */
export const arrayToMap = (arr) => {
  return arr.reduce((pre,{label,value}) => {
    pre[value] = label;
    return pre;
  },{});
}
  