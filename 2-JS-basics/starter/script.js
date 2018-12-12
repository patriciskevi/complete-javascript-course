/***************************
 * Variables and data types
 */

// const firstName = "Patric";
// console.log(firstName);

// const lastName = "Iskevi";
// let age = 36;

// let fullAge = true;
// console.log(fullAge);

// let job;
// console.log(job);
// job = "nuclear";
// console.log(job);

/***************************
 * Variables mutation and type coercion
 * In type coercion, javascript automatically converts data types. So downbelov the number and boolean datatype gets converted into strings
 */

//let firstName = "Patric";
// let age = 36;
// console.log(firstName + " " + age);
// console.log(`My name is ${firstName} and I'm ${age} old`);

// let job, isMarried;
// job = "nuclear worker";
// isMarried = false;
// console.log(
//   `${firstName} is a ${age} year old ${job}. Is he married? ${isMarried}`
// );

// Variable mutation - Change the value of a variable
// age = "thirty six";
// job = "driver";
// alert(`${firstName} is a ${age} year old ${job}. Is he married? ${isMarried}`);

//let lastName = prompt("What is his last name?");
//console.log(firstName + " " + lastName);

/***************************
 *
 * Basic operators
 */

// Math operators
// let now, yearPatric, yearTobias;
// now = 2018;
// let agePatric = 36;
// let ageTobias = 42;
// yearPatric = now - agePatric;
// yearTobias = now - ageTobias;
// console.log(yearPatric, yearTobias);
// console.log(now + 2);
// console.log(now * 2);
// console.log(now / 10);

// //Logical operators
// let isPatricOlder = agePatric > ageTobias;
// console.log(isPatricOlder);

// //typeof operator
// console.log(typeof isPatricOlder);
// console.log(typeof agePatric);
// console.log(typeof "Hello World");
// let x;
// console.log(typeof x);
// console.log(typeof null);

/***************************
 *
 * Operator precedence
 */

const now = 2018;
const yearPatric = 1982;
const fullAge = 18;

// Multiple operators
const isFullAge = now - yearPatric >= fullAge; // output true
console.log(isFullAge);

// Grouping
const agePatric = now - 1982;
const ageTobias = 42;

const average = (agePatric + ageTobias) / 2; // output 39
console.log(average);

// Multiple assignments
let x, y;
x = y = (3 + 5) * 4 - 6; // assignment operator works right-to-left and thats why y isnt undefined. // 8 * 4 - 6 // 32 - 6 // 26
console.log(x, y);

// More operators
// x = x * 2;
x *= 2;
console.log(x);
// x = x + 10;
x += 10;
console.log(x);
// Increment
// x = x + 1;
x++;
console.log(x);
// Decrement
// x = x - 1;
x--;
console.log(x);

/***************************
 *
 * Coding challange 1
 */

let markMass = 200;
let markHeight = 1.9;

let johnMass = 80;
let johnHeight = 1.83;

const markBMI = markMass / (markHeight * markHeight);
const johnBMI = johnMass / (johnHeight * johnHeight);

// const isMarkBigger = markBMI > johnBMI;

// console.log(`Is Mark's BMI higher then Johns? ${isMarkBigger}`);

/***************************
 *
 * If / else statement
 */

// const firstName = `Patric`;
// const civilStatus = `single`;

// if (civilStatus === "married") {
//   console.log(`${firstName} is single!`);
// } else {
//   console.log(`${firstName} is married!`);
// }

// const isMarried = false;

// if (isMarried) {
//   console.log(`${firstName} is married!`);
// } else {
//   console.log(`${firstName} is single!`);
// }

// if (markBMI > johnBMI) {
//   console.log(`Mark's BMI is higher than John's`);
// } else {
//   console.log(`John's BMI is higher than Mark's`);
// }

/***************************
 *
 * Boolean logic. &&-AND, ||-OR, !-NOT (reverse the boolean)
 */
// const firstName = "Patric";
// const age = 30;

// if (age < 13) {
//   console.log(`${firstName} is only a boy.`);
// } else if (age >= 13 && age < 20) {
//   console.log(`${firstName} is a teenager.`);
// } else if (age >= 20 && age < 30) {
//   console.log(`${firstName} is a young man`);
// } else {
//   console.log(`${firstName} is a grown man.`);
// }

/***************************
 *
 * The ternary operator (3 operands, condition, if block, else block) and switch statement
 */
// const firstName = "Patric";
// let age = 29;

// // Ternary operator
// age >= 18
//   ? console.log(`${firstName} drinks beer.`)
//   : console.log(`${firstName} drinks juice.`);

// const drink = age >= 18 ? "beer" : "juice";
// console.log(`${firstName} drinks ${drink}`);

// Switch statement
// let job = "teacher";

// switch (job) {
//   case "driver":
//     console.log("Drives people around");
//     break;

//   case "cook":
//     console.log("Cooks food for people");
//     break;

//   case "teacher":
//     console.log("Teaches people");
//     break;

//   default:
//     console.log("Just a man amoung the people");
// }

// switch (true) {
//   case age < 13:
//     console.log(`${firstName} is a boy`);
//     break;

//   case age < 20:
//     console.log(`${firstName} is a teenager`);
//     break;

//   case age < 30:
//     console.log(`${firstName} is a young man`);
//     break;

//   case age >= 30:
//     console.log(`${firstName} is a man`);
//     break;

//   default:
//     console.log("Are you even born yet?");
// }

/***************************
 *
 * Truthy and falsy values and equality operators
 */

// Falsy values: undefined, null, 0, '', NaN
// truthy values: everything that is not falsy

// let height;

// if (height) {
//   // falsy
//   console.log("the variable height has been defined");
// } else {
//   console.log("the variable height has NOT been defined");
// }

// height = 0;

// if (height || height === 0) {
//   console.log("the variable height has been defined");
// } else {
//   console.log("the variable height has NOT been defined");
// }

/***************************
 *
 * Coding chanllange 2
 */

let johnScore = Math.floor((89 + 120 + 503) / 3);

let mikeScore = Math.floor((89 + 120 + 503) / 3);

let maryScore = Math.floor((89 + 120 + 503) / 3);

// If / else statement
if (johnScore > mikeScore && johnScore > maryScore) {
  console.log(
    `The winner is John's team with the average score of ${johnScore}`
  );
} else if (mikeScore > johnScore && mikeScore > maryScore) {
  console.log(
    `The winner is Mike's team with the average score of ${mikeScore}`
  );
} else if (maryScore > mikeScore && maryScore > johnScore) {
  console.log(
    `The winner is Mary's team with the average score of ${maryScore}`
  );
} else {
  console.log("It's a draw!");
}

// Switch statement
switch (true) {
  case johnScore > mikeScore && johnScore > maryScore:
    console.log(
      `The winner is John's team with the average score of ${johnScore}`
    );
    break;

  case mikeScore > johnScore && mikeScore > maryScore:
    console.log(
      `The winner is Mike's team with the average score of ${mikeScore}`
    );
    break;

  case maryScore > johnScore && maryScore > mikeScore:
    console.log(
      `The winner is Mary's team with the average score of ${maryScore}`
    );
    break;

  default:
    console.log(`It's a draw!`);
}

/***************************
 *
 * Functions
 */

function calculateAge(birthYear) {
  return 2018 - birthYear;
}

let ageJohn = calculateAge(1982);
let ageMary = calculateAge(1990);
console.log(ageJohn, ageMary);
