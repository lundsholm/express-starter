/** Debug utilites */

export const log = function (...args: any[]) {
  if (process.env.DEBUG) {
    console.log(...args);
  }
};
