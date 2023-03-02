import { lenErrors } from "./common.js";

export function len(text) {
lenErrors(text);
let count = 0;
  for (let i = 0; text[i] !== undefined; i += 1) {
  count += 1;
}
return count;
}
