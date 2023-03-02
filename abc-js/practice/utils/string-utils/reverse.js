import {lenErrors} from "./common.js";
/** Возвращает "развернутую" копию text */
export function reverse(text) {
    lenErrors(text);
    let newValue = "";
    for (let i = text.length - 1; i >= 0; i-=1) {
        newValue += text[i];
    }
    return newValue;
}
