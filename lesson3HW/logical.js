// Числа та рядки
const num = 10;
const str = '10';

// Boolean
const bool1 = true;
const bool2 = false;

// Undefined и Null
let undef;
const nullable = null;

// Object и Symbol
const obj1 = { name: 'John' };
const sym = Symbol('unique');

// Операції порівняння
console.log('num == str:', num == str); // true
console.log('num === str:', num === str); // false
console.log('bool1 == 1:', bool1 == 1);
console.log('bool2 == 0:', bool2 == 0);
console.log('undef == null:', undef == nullable); // true
console.log('undef === null:', undef === nullable); // false

// Логічні операції
console.log('true && false:', bool1 && bool2); // false
console.log('true || false:', bool1 || bool2); // true
console.log('!true:', !bool1); // false
console.log('!(10 > 5):', !(10 > 5)); // false

// Логічні перевірки з об’єктами
console.log('Boolean(undefined):', Boolean(undef)); // false
console.log('Boolean(null):', Boolean(nullable)); // false
console.log('Boolean({}):', Boolean(obj1)); // true
console.log('Boolean(Symbol()):', Boolean(sym)); // true
