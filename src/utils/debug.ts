import chalk from "chalk";

// colors
export const purple = chalk.hex("#B667F1");
export const green = chalk.hex("#8BDB81");
export const blue = chalk.hex("#77ACF1");
export const orange = chalk.hex("#F98404");
export const yellow = chalk.hex("#FFCC29");
export const red = chalk.hex("#FC4F4F");
export const bold = chalk.bold;
export const underline = chalk.underline;

// debug utilites
/** prints logs when process.env.DEBUG is true */
export const log = function (...args: any[]) {
  if (!!process.env.DEBUG) {
    console.log(...args);
  }
};
