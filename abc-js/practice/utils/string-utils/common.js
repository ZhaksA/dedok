// --------------- for tests ------------------

export const complexText = "Hello world!!! It's terminator";

export const ZERO_CODE_CHAR = String.fromCharCode(0);
 
export function getErrors(firstText,secondText) {
    const errStr = 'argument must be type of string';
    if (typeof firstText !== 'string' || typeof secondText !== 'string') throw Error(errStr);
}
export function checkErrors(text) {
    const errStr = 'argument must be type of string';
    if (typeof firstText !== 'string' || typeof secondText !== 'string') throw Error(errStr);
}
export function err(text) {
    const errStr = 'argument must be type of string';
    if (typeof text !== 'string') throw Error(errStr);
}
export function geterror(value) {
    const errStr = 'value must be only number type';
    if (typeof value !== 'string') throw Error(errStr);
}