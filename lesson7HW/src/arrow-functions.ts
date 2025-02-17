const arrNumArrow: number[] = [2, 3, 4, 5, 2, 1];
const arrStrArrow: string[] = ['hello', 'world', 'apple', '4'];

const sumOfArrArrow = (arr: number [] | string[]): number | string => {
    if (arr.length === 0) {
        throw new Error('Should be a not empty array');
    }
    if (typeof arr[0] === 'number') {
        return (arr as number[]).reduce((acc, current) => acc + current, 0);
    } else {
        return (arr as string[]).reduce((acc, current) => acc + current, '');
    }
};

console.log(sumOfArrArrow(arrNumArrow));
console.log(sumOfArrArrow(arrStrArrow));
