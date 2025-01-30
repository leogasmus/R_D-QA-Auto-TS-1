// Оголошення змінних різних типів
let num1 = 10;    // Ціле число (Number)
let num2 = 5;     // Ціле число (Number)
let float1 = 7.5; // Дійсне число (Number)
let float2 = 2.5; // Дійсне число (Number)

let big1 = 123456789012345678901234567890n; // BigInt
let big2 = 2n;                              // BigInt

let str1 = "10";  // Рядок (String)
let str2 = "Hello";   // Рядок (String)

let boolTrue = true;  // Логічне значення (Boolean)
let boolFalse = false; // Логічне значення (Boolean)

// Основні арифметичні операції
console.log("Додавання:", num1 + num2); // 10 + 5 = 15
console.log("Віднімання:", num1 - num2); // 10 - 5 = 5
console.log("Множення:", num1 * num2); // 10 * 5 = 50
console.log("Ділення:", num1 / num2); // 10 / 5 = 2
console.log("Остача від ділення:", num1 % num2); // 10 % 5 = 0

// Додавання та віднімання з плаваючою комою
console.log("Додавання дробових чисел:", float1 + float2); // 7.5 + 2.5 = 10
console.log("Множення дробових чисел:", float1 * float2); // 7.5 * 2.5 = 18.75

// Операція піднесення до степеня
console.log("Піднесення до степеня:", num1 ** num2); // 10^5 = 100000

// Операції з BigInt
console.log("Додавання BigInt:", big1 + big2);
console.log("Множення BigInt:", big1 * big2);

// Операції між рядками та числами
console.log("Рядок + Рядок:", str1 + str2); // "10" + "Hello" = " 10Hello"
console.log("Рядок - Рядок:", str1 - str2); // 10 - Hello = NaN
console.log("Рядок * Число:", str1 * num2); // 10 * 5 = 50
console.log("Рядок / Число:", str1 / num2); // 10 / 5 = 2
console.log("Остача від ділення (рядок і число):", str1 % num2); // 10 % 5 = 0

// Операції з Boolean
console.log("Boolean + Число:", boolTrue + num1); // true (1) + 10 = 11
console.log("Boolean * Число:", boolFalse * num1); // false (0) * 10 = 0

// Інкремент та Декремент
let counter = 5;
console.log("Початкове значення:", counter); // 5
console.log("Префіксний інкремент:", ++counter); // 6
console.log("Постфіксний інкремент:", counter++); // 6 (виводиться старе значення, потім збільшується)
console.log("Після постфіксного інкремента:", counter); // 7
console.log("Префіксний декремент:", --counter); // 6
console.log("Постфіксний декремент:", counter--); // 6 (виводиться старе значення, потім зменшується)
console.log("Після постфіксного декремента:", counter); // 5

// Унарний плюс та мінус
let strNumber = "20";
console.log("Унарний плюс (перетворення в число):", +strNumber); // 20
console.log("Унарний мінус (зміна знаку):", -num1); // -10

// Комбіновані оператори
let x = 10;
x += 5;  // x = x + 5
console.log("x += 5:", x); // 15

x -= 3;  // x = x - 3
console.log("x -= 3:", x); // 12

x *= 2;  // x = x * 2
console.log("x *= 2:", x); // 24

x /= 4;  // x = x / 4
console.log("x /= 4:", x); // 6

x %= 5;  // x = x % 5
console.log("x %= 5:", x); // 1

x **= 3; // x = x ** 3
console.log("x **= 3:", x); // 1^3 = 1
