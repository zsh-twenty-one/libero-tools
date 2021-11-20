/**
 * 
 * @returns 返回一个随机颜色
 */
export const randomColor = () => {
  return "#" + (0x1000000 + Math.random() * 0xffffff).toString(16).substr(1, 6);
};
