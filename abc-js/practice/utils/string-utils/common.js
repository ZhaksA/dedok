import { len } from "./len.js";
/** для получения цифры строки по его индексу */
export const DIGITS = '0123456789';
export const SIGNS = '+-';
export const FLOAT_DELIMITER = '.';

export const ENG_UPPER_START = 65;
export const ENG_UPPER_FINISH = 90;
export const ENG_LOWER_START = 97;
export const ENG_LOWER_FINISH = 122;
export const ENG_CHAR_SHIFT = ENG_LOWER_START - ENG_UPPER_START;

export const RUS_UPPER_START = 1040;
export const RUS_UPPER_FINISH = 1071;
export const RUS_LOWER_START = 1072;
export const RUS_LOWER_FINISH = 1103;
export const RUS_CHAR_SHIFT = RUS_LOWER_START - RUS_UPPER_START;

export const DIGIT_START = 48;
export const DIGIT_FINISH = 57;

// --------------- for tests ------------------

export const complexText = "Hello world!!! It's terminator";

export const ZERO_CODE_CHAR = String.fromCharCode(0);
 
export function compareErrors(firstText,secondText) {
    if (typeof firstText !== 'string' || typeof secondText !== 'string') throw Error('argument must be type of string');
}
export function lenErrors(text) {
    if (typeof text !== 'string') throw Error('argument must be type of string');
}
export function geterror(value) {
    if (typeof value === 'string' || value === true) throw Error('value must be only number type');
}
export function repeatErrors(text, count) {
    if (count < 0) throw Error('invalid count');
    if (count % 1 !== 0) throw Error('invalid count');
    if (typeof count !== 'number') throw Error('invalid count');
    if (typeof text !== 'string') throw Error('argument must be type of string');
}
export function errorIsInRange(value) {
    if (typeof value !== 'number' ) throw Error('all parameter is required and must be number type');
}
export function substringErrors(text, start, end){
    if (typeof start !== 'number' || start % 1 !== 0 || start < 0) throw Error('invalid start index');
    if (typeof end !== 'number' || end % 1 !== 0 || end < 0) throw Error('invalid end index');
    if (start > end) throw Error('invalid start and end index');
    if (end > len(text)) throw Error('invalid end index');

}