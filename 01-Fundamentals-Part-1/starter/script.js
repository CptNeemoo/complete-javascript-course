// Values and Variables
let js = 'amazing';
console.log(40 + 8 + 23 - 10);
console.log('Jonas');
console.log(23);

let firstName = 'Mark';
console.log(firstName);
console.log(firstName);
console.log(firstName);
if (firstName !== 'Mark') {
    console.log(firstName);
}

let myFirstJob = 'Programmer';
let myCurrentJob = 'Teacher';
console.log(myFirstJob);
console.log(myCurrentJob);

let country = 'United States';
let continent = 'North America';
let population = 331;

console.log(country);
console.log(continent);
console.log(population);
// Data types
let javascriptIsFun = true;
console.log(javascriptIsFun);
console.log(typeof javascriptIsFun);
console.log(typeof 23);
console.log(typeof 'amazing');
javascriptIsFun = 'YES!';
console.log(typeof javascriptIsFun);
console.log(typeof 23.5);

console.log(typeof null); // object (this is a known bug in JavaScript)
// let, const and var
let age = 30;
age = 31;

const birthYear = 1991;
// birthYear = 1990; // Error: Assignment to constant variable

var job = 'programmer';
job = 'teacher';
console.log(job);
// Basic Operators
const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2018;
console.log(ageJonas, ageSarah);
console.log(ageJonas * 2, ageJonas / 10, 2 ** 3); // 2 ** 3 means 2 to the power of 3
console.log(ageJonas > ageSarah); // >, <, >=, <=
console.log(ageSarah >= 18);
const isFullAge = ageSarah >= 18;
console.log(now - 1991 > now - 2018); // false0
console.log('Mark' + ' ' + 'Smith'); // Mark Smith
// Assignment Operators
let x = 10 + 5; // 15
x += 10; // x = x + 10; x = 25
x *= 4; // x = x * 4; x = 100
x++; // x = x + 1; x = 101
x--; // x = x - 1; x = 100
console.log(x); // 100
// Comparison Operators
console.log(ageJonas > ageSarah); // true
console.log(ageSarah >= 18); // true
console.log(ageJonas < ageSarah); // false
console.log(ageJonas <= ageSarah); // false
console.log(ageJonas == ageSarah); // false
console.log(ageJonas != ageSarah); // true
console.log(ageJonas === ageSarah); // false
console.log(ageJonas !== ageSarah); // true
// Operator Precedence
console.log(25 - 10 - 5); // 10
console.log(2 + 3 * 4); // 14
console.log(2 ** 3 ** 2); // 512 (2 to the power of (3 to the power of 2))
console.log((2 + 3) * 4); // 20
console.log(2 + 3 * 4 ** 2); // 50 (2 + (3 * (4 ** 2)))
console.log(2 + 3 * 4 ** 2 - 5); // 45 (2 + (3 * (4 ** 2)) - 5)
console.log(2 + 3 * (4 ** 2 - 5)); // 2 + 3 * (16 - 5) = 2 + 3 * 11 = 35
// Strings and Template Literals
const teacherName = 'Mark';
const personJob = 'teacher';
const year = 1991;

const Jonas = "I'm " + teacherName + ', a ' + (2025 - year) + ' years old ' + personJob + '!';
console.log(Jonas);
const JonasNew = `I'm ${teacherName}, a ${2025 - year} years old ${personJob}!`;
console.log(JonasNew);
console.log(`String with \n\
multiple \n\
lines`);
console.log(`String with
multiple
lines`);
// Taking Decisions: if / else Statements
const personAge = 19;
const isOldEnough = personAge >= 18;
if (isOldEnough) {
    console.log('Sarah can start driving license 🚗');
}
else {
    const yearsLeft = 18 - personAge;
    console.log(`Sarah is too young. Wait another ${yearsLeft} years :)`);
}
// Type Conversion and Coercion
console.log('I am ' + 23 + ' years old'); // Type coercion
console.log('23' - '10' - 3); // 10 (string to number conversion)
console.log('23' * '2'); // 46 (string to number conversion)
console.log('23' / '2'); // 11.5 (string to number conversion)
console.log('23' > '18'); // true (string comparison)
Boolean(0); // false
console.log(Boolean(undefined)); // false
console.log(Boolean('')); // false
console.log(Boolean(null)); // false
console.log(Boolean(NaN)); // false
console.log(Boolean('Hello')); // true (non-empty string is truthy)
console.log(Boolean(23)); // true (non-zero number is truthy)
console.log(Boolean([])); // true (empty array is truthy)
console.log(Boolean([1, 2, 3])); // true (non-empty array is truthy)
console.log(Boolean({ name: 'Mark' })); // true (object is truthy)
console.log(Boolean({})); // true (empty object is truthy)
console.log(Boolean('false')); // true (non-empty string is truthy)
console.log(Boolean('0')); // true (non-empty string is truthy)
// Equality Operators: == vs. ===
console.log('18' == 18); // true (loose equality)
console.log('18' === 18); // false (strict equality)
console.log(0 == false); // true (loose equality)
console.log(0 === false); // false (strict equality)
console.log(1 == true); // true (loose equality)
console.log(1 === true); // false (strict equality)
console.log('1' == true); // true (loose equality)
console.log('1' === true); // false (strict equality)
console.log(null == undefined); // true (loose equality)
console.log(null === undefined); // false (strict equality)
console.log('0' == false); // true (loose equality)
console.log('0' === false); // false (strict equality)
console.log('' == false); // true (loose equality)
console.log('' === false); // false (strict equality)
//Boolean Logic
console.log(true && true); // true (AND)
console.log(true && false); // false (AND)
console.log(false && false); // false (AND)
console.log(true || true); // true (OR)
console.log(true || false); // true (OR)
console.log(false || false); // false (OR)
console.log(!true); // false (NOT)
console.log(!false); // true (NOT)
console.log(!0); // true (NOT)
console.log(!''); // true (NOT)
console.log(!undefined); // true (NOT)
console.log(!null); // true (NOT)
console.log(!NaN); // true (NOT)
console.log(!1); // false (NOT)
console.log(!'Hello'); // false (NOT)
console.log(!'false'); // false (NOT)
console.log(!'0'); // false (NOT)
console.log(![]); // false (NOT)
console.log(![1, 2, 3]); // false (NOT)
console.log(!{}); // false (NOT)
console.log(!{ name: 'Mark' }); // false (NOT)
console.log(!function () { }); // false (NOT)
console.log(!function () { return true; }); // false (NOT)
console.log(!function () { return false; }); // false (NOT)
console.log(!function () { return 0; }); // false (NOT)
// The switch Statement
// The switch statement is a cleaner way to write multiple if-else statements
// The switch statement evaluates the expression and compares it with each case
const day = 'monday';
switch (day) {
    case 'monday':
        console.log('Plan course structure');
        console.log('Go to coding meetup');
        break;
    case 'tuesday':
        console.log('Prepare theory videos');
        break;
    case 'wednesday':
    case 'thursday':
        console.log('Write code examples');
        break;
    case 'friday':
        console.log('Record videos');
        break;
    case 'saturday':
    case 'sunday':
        console.log('Enjoy the weekend! 😎');
        break;
    default:
        console.log('Not a valid day!');
}
// If example for the switch statement
if (day === 'monday') {
    console.log('Plan course structure');
    console.log('Go to coding meetup');
}
else if (day === 'tuesday') {
    console.log('Prepare theory videos');
}
else if (day === 'wednesday' || day === 'thursday') {
    console.log('Write code examples');
}
else if (day === 'friday') {
    console.log('Record videos');
}
else if (day === 'saturday' || day === 'sunday') {
    console.log('Enjoy the weekend! 😎');
}
else {
    console.log('Not a valid day!');
}
// Statements and Expressions
// Expression: a piece of code that produces a value
// Statement: a piece of code that performs an action
// Example of an expression: 3 + 4 (produces a value)
// Example of a statement: if (age >= 18) { console.log('Adult'); } (performs an action)
// The Conditional (Ternary) Operator
const drinkingAge = 23;
const isAllowedToDrink = ageJonas >= drinkingAge ? 'Yes' : 'No';
console.log(isAllowedToDrink); // Yes (if ageJonas is greater than or equal to drinkingAge, it will print 'Yes', otherwise 'No')
console.log(`Is Jonas allowed to drink? ${isAllowedToDrink}`); // Is Jonas allowed to drink? Yes (if ageJonas is greater than or equal to drinkingAge, it will print 'Yes', otherwise 'No')
