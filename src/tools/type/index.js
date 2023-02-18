/**
 *
 * @param {any} data
 * @returns type = number | object | array | function | date | regexp | boolean | symbol | null | undefined
 * @desc 判断数据类型
 */
const type = (data) => {
  const reg = /\[object\s([a-zA-Z]+)\]/g;
  const typeString = Object.prototype.toString.call(data);
  return reg.exec(typeString)[1]?.toLocaleLowerCase();
};

module.exports = {type};
