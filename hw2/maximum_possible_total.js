/**
 * Calculates maximum possible total of 5 elements
 * @param {Array} arr 
 * @returns maximum possible total of 5 elements
 */
let maxTotal = arr => arr.sort((a, b) => b - a).slice(0, 5).reduce((a, b) => a + b);

// Tests
console.log('maxTotal([1, 1, 0, 1, 3, 10, 10, 10, 10, 1]) => ', maxTotal([1, 1, 0, 1, 3, 10, 10, 10, 10, 1]));
console.log('maxTotal([0, 0, 0, 0, 0, 0, 0, 0, 0, 100]) => ', maxTotal([0, 0, 0, 0, 0, 0, 0, 0, 0, 100]));
console.log('maxTotal([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]) => ', maxTotal([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));

