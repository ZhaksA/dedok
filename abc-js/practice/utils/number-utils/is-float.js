export function isFloat(value) {
if (value === true || typeof value === 'string') throw Error('value must be only number type');
if ((value % 1) !== 0)
return true;
return false;
}
