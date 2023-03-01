
import { getErrors } from "./common.js"; 
import { len } from "./len.js";
/** возвращает булевый ответ равны ли параметры firstText и secondText. */
export function isEqual(firstText, secondText) {
getErrors(firstText,secondText);
const cycleLength = len(firstText) < len(secondText) ? firstText.length : secondText.length;
    if (len(firstText) !== len(secondText)) return false;
    for (let index = 0; index < cycleLength; index += 1){
        if (firstText[index] !== secondText[index]) return false;
    }
    return true;
}

/** возвращает true если аргументы не равны, и true в иных случаях. */
export function isNotEqual(firstText, secondText) {
    return !(isEqual(firstText, secondText));
}

/** возвращает булевый ответ больше ли параметр firstText чем secondText. */
export function isMore(firstText, secondText) {
getErrors(firstText,secondText);
  for (let i = 0; i < len(firstText); i +=1) {
        if ( i === len(secondText)) return true; 
        if ( firstText[i] > secondText[i]) return true; 
        if ( firstText[i] < secondText[i]) return false;
  }
 return false;
}

/** возвращает булевый ответ меньше ли параметр firstText чем secondText. */
export function isLess(firstText, secondText) {
  if (isEqual(firstText,secondText)) return false;
    return !(isMore(firstText,secondText));
}

/** возвращает булевый ответ больше или равно ли параметр firstText чем secondText. */
export function isMoreOrEqual(firstText, secondText) {
    return (!isLess(firstText,secondText));
}

/** возвращает булевый ответ меньше или равно ли параметр firstText чем secondText. */
export function isLessOrEqual(firstText, secondText) {
    return !(isMore(firstText,secondText));
}
