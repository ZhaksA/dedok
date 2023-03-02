import { len } from "./len.js";
import { substringErrors } from "./common.js";
/** Возвращает копию text начиная с индекса start до индекса end.
 * Символ с индексом end не включается в выборку.
 * Если start не передано, то будет выборка начнется с первого символа.
 * Если end не передано, то будет возвращено text до последнего символа*/
export function substring(text, start, end) { 
    if (typeof text !== 'string') throw Error('argument must be type of string')
    if (start === undefined && end === undefined) return text;
    end = (end === undefined) ? len(text) : end;
    substringErrors(text, start, end);
    let NewText = "";
        for (let i = start; i < end; i++) {
            NewText += text[i];
        
    }
return NewText;
}
