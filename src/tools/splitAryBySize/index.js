const { type } = require("../type/index");
const { deepClone } = require("../deepClone/index");

/**
 *
 * @param {Array} arys
 * @param {切块大小} size
 * @returns 返回分割后的数组
 * @desc 将数组按照传入的大小进行数组分割，不改变原数组
 */
const splitAryBySize = (arys = [], size = 1) => {
  const oAry = [];
  if (type(arys) === "array" && arys.length >= size) {
    const split = (ary) => {
      const o = deepClone(ary);
      oAry.push(o.splice(0, size));
      if (o.length >= size) {
        split(o);
      } else if (o.length > 0) {
        oAry.push(o);
      }
    };
    split(arys);
  }
  return oAry;
};
