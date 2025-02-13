const arrNumArrow: number[] = [2, 3, 4, 5, 2, 1];
const arrStrArrow: string[] = ['hello', 'world', 'apple', '4'];

const sumOfArrArrow = (arr: (number | string)[]): number | string => {
    if (arr.length === 0) {
        throw new Error('Should be a not empty array');
    }
    return (arr as number[]).reduce((acc, current) => acc + current, 0);
};

console.log(sumOfArrArrow(arrNumArrow));
console.log(sumOfArrArrow(arrStrArrow));
