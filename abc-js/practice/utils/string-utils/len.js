export function len(text) {
  const errStr = "argument must be type of string";
  if (typeof text !== "string") throw Error(errStr);
  let count = 0;
  for (let i = 0; text[i] !== undefined; i += 1) {
    count += 1;
  }
  return count;
}
