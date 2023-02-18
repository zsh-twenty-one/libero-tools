import { type } from "./src/tools/type";

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

  /**
   *
   * @param {Array} arys
   * @param {切块大小} size
   * @returns 返回分割后的数组
   * @desc 将数组按照传入的大小进行数组分割，不改变原数组
   */
  export function splitAryBySize<T = any>(
    arys: T[],
    size: number
  ): LiberoArray<T>[];

  /**
   *
   * @param {Object} obj
   * @returns 返回clone后的数据
   */
  export function deepClone<T = any>(obj: T): T;

  /**
   *
   * @param {any} data
   * @returns type = number | object | array | function | date | regexp | boolean | symbol | null | undefined
   * @desc 判断数据类型
   */
  export function type<T = any>(data: T): dataType;

  /// types

  /** 数组，T为元素类型 */
  type LiberoArray<T> = T[];
  /** 数组，T为元素类型 */
  type dataType =
    | "number"
    | "object"
    | "array"
    | "function"
    | "date"
    | "regexp"
    | "boolean"
    | "symbol"
    | "null"
    | "undefined";


    
  /**
   * @desc 延迟、等待
   * @param {number} timer 单位 ms {5秒 请传入 5000}
   */
  export function delays(timer: number): true;

  /**
   *@desc 获取时间戳
   * @return {number} 时间戳
   */
  export function getTimer(): number;

}
