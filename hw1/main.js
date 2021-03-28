/**
 * Inserts arr2 into middle of arr1
 * @param {Array} arr1 - insert into this array
 * @param {Array} arr2 - insert this array
 * @returns {Array} - array after inserting
 */
function tuckIn(arr1, arr2) {
    return [...arr1.slice(0, Math.floor(arr1.length / 2)), ...arr2, ...arr1.slice(Math.floor(arr1.length / 2))];
}

/**
 * Find min and max or array (if aaray has zero length will return [])
 * @param {Array} arr - array to process
 * @returns {Array} - [min, max]
 */
function minMax(arr) {
    return arr.length === 0 ? [] : [Math.min(...arr), Math.max(...arr)]
}

/**
 * Checks if arr1 can be nested inside arr2
 * @param {Array} arr1 - array to be nested
 * @param {Array} arr2 - array to be nested into
 * @returns {Boolean} - if the first array can be nested inside the second
 */
function canNest(arr1, arr2) {
    let arr1Values = minMax(arr1);
    let arr2Values = minMax(arr2);
    return arr1Values.length === 0 ? true : arr2Values.length < 2 ? false : arr1Values[0] > arr2Values[0] && arr1Values[1] < arr2Values[1] ? true : false;
}

/**
 * Test function that runs test for all previous functions
 */
function testHW() {
    console.log('tuckIn([1,10],[2,3,4,5,6,7,8,9]) -> [', tuckIn([1,10],[2,3,4,5,6,7,8,9]).join(', '), ']');
    console.log('tuckIn([15,150],[45,75,35]) -> [', tuckIn([15,150],[45,75,35]).join(', '), ']');
    let data = tuckIn([[1,2],[5,6]],[[3,4]]);
    console.log('tuckIn([[1,2],[5,6]],[[3,4]]) -> ', '[[', data[0].join(', '), '], [', data[1].join(', '), '], [', data[2].join(', '), ']', ']');
    
    console.log('minMax([1,2,3,4,5]) -> [', minMax([1,2,3,4,5]).join(', '), ']');
    console.log('minMax([2334454,5]) -> [', minMax([2334454,5]).join(', '), ']');
    console.log('minMax([1]) -> [', minMax([1]).join(', '), ']');
    console.log('minMax([]) -> [', minMax([]).join(', '), ']');
    
    console.log('canNest([1,2,3,4],[0,6]) -> ', canNest([1,2,3,4],[0,6]));
    console.log('canNest([3,1],[4,0]) -> ', canNest([3,1],[4,0]));
    console.log('canNest([9,9,8],[8,9]) -> ', canNest([9,9,8],[8,9]));
    console.log('canNest([1,2,3,4],[2,3]) -> ', canNest([1,2,3,4],[2,3]));
    console.log('canNest([],[2,3]) -> ', canNest([],[2,3]));
    console.log('canNest([1, 2],[]) -> ', canNest([1, 2],[]));
    console.log('canNest([1, 2],[3]) -> ', canNest([1, 2],[3]));
    console.log('canNest([1, 2],[-3]) -> ', canNest([1, 2],[-3]));
}


// start tests
testHW();