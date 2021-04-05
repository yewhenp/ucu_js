/**
 * Converts Object to array (recursively)
 * @param {Object} obj - object to iterate
 * @returns {Array}
 */
let toArr = obj => {
    let arr = [];
    for (let item in obj) {
        typeof obj[item] === 'object' && obj[item] !== null ? arr.push([item, toArr(obj[item])]) : arr.push([item, obj[item]]);
    }
    return arr;
}

// Some tests
console.log("toArr({ key1: 'value1', key2: 'value2' }) => ", toArr({ key1: 'value1', key2: 'value2' }));
console.log("toArr({}) => ", toArr({}));
let res = toArr({ key1: 'value1', key2: 'value2', key3: {key31: 'hello', key32: 'world'} });
console.log("toArr({ key1: 'value1', key2: 'value2', key3: {key31: 'hello', key32: 'world'} }) => ", res);
