const { type } = require("../type/index");

/**
 *
 * @param {Object} obj
 * @returns 返回clone后的数据
 */
const deepClone = (obj = {}) => {
  if (obj === null) return null;
  let clone = Object.assign({}, obj);
  Object.keys(clone).forEach(
    (key) =>
      (clone[key] =
        typeof obj[key] === "object" ? deepClone(obj[key]) : obj[key])
  );
  if (type(obj) === "array") {
    clone.length = obj.length;
    return Array.from(clone);
  }
  return clone;
};

module.exports = {deepClone}