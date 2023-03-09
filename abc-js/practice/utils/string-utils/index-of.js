/** Выполняет поиск строки searchString в строке text
 * и возвращает первую найденную позицию.
 * Если в вхождение не найдено, то возвращает значение -1.
 * Параметр index задает начальную индекс с которой необходимо
 * начать поиск.*/
export function indexOf(text, searchString, index=0) {
    let lenText = text.length;
    let searchLen = searchString.length;
    for (index = 0; index < lenText; index++){
        let j = 0;
        for (j = 0; j < searchLen; j++){
            if (text[index + j] !== searchString[j]){
                break;
            }
        }
        if (j === searchLen){
            return index;
        }
    }
    return -1;
}
