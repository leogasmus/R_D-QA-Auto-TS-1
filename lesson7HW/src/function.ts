const arrNum: number[] = [1, 2, 3, 4, 5];
const arrStr: string[] = ['hello', 'world', 'apple', '4'];

function sumOfArr(arr:  number [] | string[]): number | string {
    if (arr.length === 0) {
        throw new Error('Should be a not empty array');
    }
    if (typeof arr[0] === 'number') {
        return (arr as number[]).reduce((acc, current) => acc + current, 0);
    } else {
        return (arr as string[]).reduce((acc, current) => acc + current, '');
    }
}

console.log(sumOfArr(arrNum));
console.log(sumOfArr(arrStr));
