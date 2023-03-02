import { errorIsInRange } from "../string-utils/common.js";

/** проверяет входит ли число num в диапозон от begin до end.
  Значения begin и end вхоодят в проверяемый диапазон.*/
export function isInRange(num, begin, end) {
  errorIsInRange(num);
  errorIsInRange(begin);
  errorIsInRange(end);
  if (begin <= num && num <= end) return true;
  return false;
}
