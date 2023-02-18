/**
 * @returns 获取时间
 */
export const getTimer = () => new Date().getTime()

/**
 * 
 * @param {number} timer 等待时间
 */
export const delays = (timer) => {
  
  const nowTimer = new Date().getTime();

  while (getTimer() - nowTimer < timer) {
    /** wait a moment */
  }
  return true;
};
