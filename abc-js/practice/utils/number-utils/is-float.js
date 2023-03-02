import { geterror } from "../string-utils/common.js";

export function isFloat(value) {
geterror(value)
if (value % 1 !== 0) return true;
return false;
}
