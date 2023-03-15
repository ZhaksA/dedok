import {checkParameters} from "./common.js";
import { len } from "./len.js";
/** Возвращает "развернутую" копию text */
export function reverse(text) {
    checkParameters(text);
    let resultValue = "";
    for (let i = len(text) - 1; i >= 0; i-=1) {
        resultValue += text[i];
    }
    return resultValue;
}
