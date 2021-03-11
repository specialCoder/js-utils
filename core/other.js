/**
 * 纯前端文件下载
 * https://www.zhangxinxu.com/wordpress/2017/07/js-text-string-download-as-html-json-file/
 * https://javascript.info/blob
 * @param { String } content 文本内容
 * @param { String } fileName 文件名称
*/
export const downloadFile = (content, filename) => {
    // 创建隐藏的可下载链接
    const eleLink = document.createElement('a');
    eleLink.download = filename;
    eleLink.style.display = 'none';
    // 字符内容转变成blob地址
    const blob = new Blob([content]);
    eleLink.href = URL.createObjectURL(blob);
    // 触发点击
    document.body.appendChild(eleLink);
    eleLink.click();
    // 然后移除
    document.body.removeChild(eleLink);
};

/**
 * 纯前端下载图片
 * @param { HTMLImageElement } domImg  image元素
 * @param {String} filename 文件名称
 */
export  const downloadImage = (domImg, filename) => {
    // 创建隐藏的可下载链接
    const eleLink = document.createElement('a');
    eleLink.download = filename;
    eleLink.style.display = 'none';
    // 图片转base64地址
    const canvas = document.createElement('canvas');
    const context = canvas.getContext('2d');
    // const width = domImg.naturalWidth;
    // const height = domImg.naturalHeight;
    context.drawImage(domImg, 0, 0);
    // 如果是PNG图片，则canvas.toDataURL('image/png')
    eleLink.href = canvas.toDataURL('image/jpeg');
    // 触发点击
    document.body.appendChild(eleLink);
    eleLink.click();
    // 然后移除
    document.body.removeChild(eleLink);
};