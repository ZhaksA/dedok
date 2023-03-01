/** Возвращает text повторенный count раз. */
export function repeat(text, count = 1) {
  let retValue = '';
    for (let i = 0; i < count; i += 1) {                                                                                                                  
      retValue += text;
    }
    return retValue; 
}
