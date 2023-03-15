import { checkParameters } from "./common.js";
import { isFloat } from "../number-utils/is-float.js";

/** Возвращает text повторенный count раз. */
export function repeat(text, count = 1) {
  checkParameters(text);
  if (typeof count !== "number" || count < 0 || isFloat(count)) throw Error("invalid count");
  let retValue = "";
  for (let i = 0; i < count; i += 1) {
    retValue += text;
  }
  return retValue;
}
