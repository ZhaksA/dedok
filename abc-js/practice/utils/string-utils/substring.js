import { len } from "./len.js";
import { isFloat } from "../number-utils/is-float.js";
/** Возвращает копию text начиная с индекса start до индекса end.
 * Символ с индексом end не включается в выборку.
 * Если start не передано, то будет выборка начнется с первого символа.
 * Если end не передано, то будет возвращено text до последнего символа*/
export function substring(text, start = 0, end = len(text)) {
  if (typeof start !== "number" || isFloat(start) || start < 0) throw Error("invalid start index");
  if (typeof end !== "number" || isFloat(end) || end < 0) throw Error("invalid end index");
  if (start > end) throw Error("invalid start and end index");
  if (end > len(text)) throw Error("invalid end index");
  let res = "";
  for (let i = start; i < end; i++) {
    res += text[i];
  }
  return res;
}
