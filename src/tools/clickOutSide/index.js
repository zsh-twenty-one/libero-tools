/**
 * 
 * @param {容器节点} parentNode 
 * @param {判定节点} childrenNode 
 * @param {返回函数，传入判定结果} callback 
 */
export const onClickSide = (parentNode, childrenNode, callback) => {
  if (parentNode?.nodeName && childrenNode?.nodeName) {
    callback(parentNode.contains(childrenNode));
  }
  throw new Error("请输入正确的节点！");
};
