import { checkCompareParameters } from "./common.js";
import { len } from "./len.js";
/** возвращает булевый ответ равны ли параметры firstText и secondText. */
export function isEqual(firstText, secondText) {
  checkCompareParameters(firstText, secondText);
  if (len(firstText) !== len(secondText)) return false;
  const cycleLength = len(firstText) < len(secondText) ? len(firstText) : len(secondText);
  for (let index = 0; index < cycleLength; index += 1) {
    if (firstText[index] !== secondText[index]) return false;
  }
  return true;
}

/** возвращает true если аргументы не равны, и true в иных случаях. */
export function isNotEqual(firstText, secondText) {
  return !isEqual(firstText, secondText);
}

/** возвращает булевый ответ больше ли параметр firstText чем secondText. */
export function isMore(firstText, secondText) {
  checkCompareParameters(firstText,secondText);
  const lenFirstText = len(firstText);
  const lenSecondText = len(secondText);
  for (let i = 0; i < lenFirstText; i += 1) {
    if (i === lenSecondText) return true;
    if (firstText[i] > secondText[i]) return true;
    if (firstText[i] < secondText[i]) return false;
  }
  return false;
}

/** возвращает булевый ответ меньше ли параметр firstText чем secondText. */
export function isLess(firstText, secondText) {
  return !isEqual(firstText, secondText) && !isMore(firstText, secondText);
}

/** возвращает булевый ответ больше или равно ли параметр firstText чем secondText. */
export function isMoreOrEqual(firstText, secondText) {
  return !isLess(firstText, secondText);
}

/** возвращает булевый ответ меньше или равно ли параметр firstText чем secondText. */
export function isLessOrEqual(firstText, secondText) {
  return !isMore(firstText, secondText);
}
