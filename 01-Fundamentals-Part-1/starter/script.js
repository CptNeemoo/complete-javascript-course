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
const job = 'teacher';
const year = 1991;

const Jonas = "I'm " + teacherName + ', a ' + (2025 - year) + ' years old ' + job + '!';
console.log(Jonas);
const JonasNew = `I'm ${teacherName}, a ${2025 - year} years old ${job}!`;
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
