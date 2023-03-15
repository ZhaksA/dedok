import { checkParameters } from "./common.js"

export function len(text) {
checkParameters(text);
  for (let i = 0; true; i++) { if (!text[i]) return i}
}
