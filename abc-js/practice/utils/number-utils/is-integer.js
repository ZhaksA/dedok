import { geterror } from "../string-utils/common.js";
export function isInteger(value) {
geterror(value)
if (value % 1 !== 0) return false;
return true;
}
