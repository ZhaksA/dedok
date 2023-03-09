import { len } from "./len.js";
import { checkSubstringParameters } from "./common.js";
/** Возвращает копию text начиная с индекса start до индекса end.
 * Символ с индексом end не включается в выборку.
 * Если start не передано, то будет выборка начнется с первого символа.
 * Если end не передано, то будет возвращено text до последнего символа*/
export function substring(text, start, end) {
  const lenText = len(text);
  if (start === undefined && end === undefined) return text;
  end = end ?? lenText;
  checkSubstringParameters(text, start, end);
  let res = "";
  for (let i = start; i < end; i++) {
    res += text[i];
  }
  return res;
}
