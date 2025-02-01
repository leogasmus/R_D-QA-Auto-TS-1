const numbers = [3, 2, 1, 4];
const str = ['apple', 'banana', 'pineapple', 'melon'];
const bool = [true, false, false, true];
const any = [1, 'cat', false, '5'];

//sort()

numbers.sort((a, b) => a - b);
str.sort();
bool.sort((a, b) => a - b);
any.sort((a, b) => a - b);

console.log(`sortedNumbers: ${numbers}`);
console.log(`sortedStr: ${str}`);
console.log(`sortedBool: ${bool}`);
console.log(`sortedAny: ${any}`);

//filter()
const evenNumbers = numbers.filter((num) => num % 2 == 0);
console.log(`Even numbers: ${evenNumbers}`);

//find()
const findElement = any.find((el) => el > 2);
console.log(`Fined element: ${findElement}`);

//concat()
const hugeArray = numbers.concat(str).concat(bool).concat(any);
console.log(`Concatenated array: ${hugeArray}`);

//includes()
console.log(`Includes 5 in numbers: ${numbers.includes(5)}`); // false
console.log(`Includes apple in str: ${str.includes('apple')}`); // true
console.log(`Includes true in bool: ${bool.includes(true)}`); // true
console.log(`Includes home in any: ${any.includes('home')}`); //false

//join()
console.log(`Join str: ${str.join(' *** ')}`); //  apple *** banana *** melon *** pineapple

//spread syntax
const newArr = [...numbers, ...bool];
console.log(`Spread operator: ${newArr}`);

//forEach()
numbers.forEach((el) => console.log(`To square ${el} is : ${el ** 2}`));
str.forEach((el, i) => console.log(`Index of ${el} is : ${i}`));
bool.forEach((el) => console.log(`Invert ${el} is: ${!el}`));

//map()
const mapNumbers = numbers.map((el, index) => Math.pow(el, index));
console.log(`Number to the power of index: ${mapNumbers}`);

//push()
str.push('cucumber');
console.log(`Push new item in str: ${str}`);

//pop()
bool.pop();
console.log(`Delete last item in bool: ${bool}`);

//shift()
numbers.shift();
console.log(`Delete first item in numbers: ${numbers}`);

//shift()
any.unshift(505);
console.log(`Add new first item in any: ${any}`);
