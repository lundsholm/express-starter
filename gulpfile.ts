import { src, dest, watch } from "gulp";
import ts from "gulp-typescript";

var tsProject = ts.createProject("tsconfig.json");

function compile() {
  return src("src/**/*.ts").pipe(tsProject()).pipe(dest("build"));
}

export default function () {
  watch("src/**/*.ts", compile);
}
