/**
 * Iterator over words on string
 * @param {String} splitString 
 */
function* splitGenerator(splitString) {
    var index = 0;
    var data = splitString.match(/\w+/g)
    try {
        while (index < data.length) {
            yield data[index];
            index++;
        }
    } catch (e) {
        yield "";
    }
}

/**
 * Calculates the number of the average word length.
 * @param {String} splitString 
 * @returns {Number} average size
 */
let avgWordLengthCalc = splitString => {
    let count = 0;
    let size = 0;
    dataIterator = splitGenerator(splitString);
    for (const item of dataIterator) {
        count++;
        size += item.length;
    }
    return size / count;
}

// Tests
console.log('avgWordLengthCalc("q w e r t y.") => ', avgWordLengthCalc("q w e r t y."));
console.log('avgWordLengthCalc("The reduce method executes a reducer function.") => ', avgWordLengthCalc("The reduce method executes a reducer function."));
console.log('avgWordLengthCalc("callback is called, accumulator!") => ', avgWordLengthCalc("callback is called, accumulator!"));
console.log('avgWordLengthCalc("") => ', avgWordLengthCalc(""));
