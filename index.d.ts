declare module "libero-tools" {
  /**
   * @returns 返回一个随机颜色
   */
  export function randomColor(): string;

  /**
   * @desc 比较两个值是否相等，不会比较引用地址
   */
  export function equals(a: any, b: any): boolean;

  /**
   *
   * @param  parentNode 容器节点
   * @param  childrenNode 判定节点
   * @param  callback 判断结果通过该函数返回
   */
  export function onClickSide(
    parentNode: HTMLElement,
    childrenNode: HTMLElement,
    callback: (bo: boolean) => void
  ): void;
}
