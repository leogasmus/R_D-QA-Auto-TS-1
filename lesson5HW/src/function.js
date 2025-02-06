const arrNum = [2, 3, 4, 5, 2, 1];
const arrStr = ['hello', 'world', 'apple', '4'];
const arrAny = ['hello', 'world', 'apple', '4', 4];

function sumOfArr(arr) {
    if (!Array.isArray(arr) && arr.length === 0) {
        throw new Error('Should be a not empty array');
    }
    return arr.reduce((acc, current) => acc + current);
}

function sumOnlyNumber(arr) {
    if (!Array.isArray(arr) && arr.length === 0) {
        throw new Error('Should be a not empty array');
    }
    const numbers = arr.filter((el) => typeof el === 'number');
    return numbers.reduce((acc, current) => acc + current, 0);
}

console.log(sumOfArr(arrNum));
console.log(sumOfArr(arrStr));
console.log(sumOfArr(arrAny));

console.log(sumOnlyNumber(arrNum));
console.log(sumOfArr(arrStr));
console.log(sumOnlyNumber(arrAny));
