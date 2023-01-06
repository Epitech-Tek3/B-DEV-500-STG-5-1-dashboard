/* eslint no-extend-native: 0 */
// core-js comes with Next.js. So, you can import it like below
import includes from "core-js/library/fn/string/virtual/includes";

String.prototype.includes = includes;
