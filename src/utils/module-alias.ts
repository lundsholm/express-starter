import moduleAlias from "module-alias";
import path from "path";
import { log, green } from "./debug";

log(green("[moduleAlias] initalizing"));
// these need to point to the compiled js files, in our case they are in the build directory
moduleAlias.addAliases({
  "@": path.join(path.resolve(), "build"),
});
