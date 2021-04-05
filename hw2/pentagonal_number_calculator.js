function MyException(message) {
    this.message = message;
    this.name = 'MyException';
  }

/**
 * Calculates Pentagonal Number
 * @param {Number} n 
 * @returns Pentagonal Number
 */
let pentagonalNumber = n => {
    if (!Number.isInteger(n)) {
        throw new MyException('Incorrect argument type!');
    }
    if (n < 1) {
        throw new MyException('n should be greater than 0!');
    }
    return (3*n*n - n) / 2;
}


// Tests
console.log('pentagonalNumber(1) => ', pentagonalNumber(1));
console.log('pentagonalNumber(2) => ', pentagonalNumber(2));
console.log('pentagonalNumber(5) => ', pentagonalNumber(5));
console.log('pentagonalNumber(9) => ', pentagonalNumber(9));

try {
    console.log('pentagonalNumber(-12) => ', pentagonalNumber(-12));
} catch (e) {
    console.log('pentagonalNumber(-12) => caught exception: ', e);
}

try {
    console.log('pentagonalNumber("hello") => ', pentagonalNumber("hello"));
} catch (e) {
    console.log('pentagonalNumber("hello") => caught exception: ', e);
}

