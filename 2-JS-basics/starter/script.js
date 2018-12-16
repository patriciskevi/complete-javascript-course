// /***************************
//  * Variables and data types
//  */

// // const firstName = "Patric";
// // console.log(firstName);

// // const lastName = "Iskevi";
// // let age = 36;

// // let fullAge = true;
// // console.log(fullAge);

// // let job;
// // console.log(job);
// // job = "nuclear";
// // console.log(job);

// /***************************
//  * Variables mutation and type coercion
//  * In type coercion, javascript automatically converts data types. So downbelov the number and boolean datatype gets converted into strings
//  */

// //let firstName = "Patric";
// // let age = 36;
// // console.log(firstName + " " + age);
// // console.log(`My name is ${firstName} and I'm ${age} old`);

// // let job, isMarried;
// // job = "nuclear worker";
// // isMarried = false;
// // console.log(
// //   `${firstName} is a ${age} year old ${job}. Is he married? ${isMarried}`
// // );

// // Variable mutation - Change the value of a variable
// // age = "thirty six";
// // job = "driver";
// // alert(`${firstName} is a ${age} year old ${job}. Is he married? ${isMarried}`);

// //let lastName = prompt("What is his last name?");
// //console.log(firstName + " " + lastName);

// /***************************
//  * Basic operators
//  */

// // Math operators
// // let now, yearPatric, yearTobias;
// // now = 2018;
// // let agePatric = 36;
// // let ageTobias = 42;
// // yearPatric = now - agePatric;
// // yearTobias = now - ageTobias;
// // console.log(yearPatric, yearTobias);
// // console.log(now + 2);
// // console.log(now * 2);
// // console.log(now / 10);

// // //Logical operators
// // let isPatricOlder = agePatric > ageTobias;
// // console.log(isPatricOlder);

// // //typeof operator
// // console.log(typeof isPatricOlder);
// // console.log(typeof agePatric);
// // console.log(typeof "Hello World");
// // let x;
// // console.log(typeof x);
// // console.log(typeof null);

// /***************************
//  * Operator precedence
//  */

// const now = 2018;
// const yearPatric = 1982;
// const fullAge = 18;

// // Multiple operators
// const isFullAge = now - yearPatric >= fullAge; // output true
// console.log(isFullAge);

// // Grouping
// const agePatric = now - 1982;
// const ageTobias = 42;

// const average = (agePatric + ageTobias) / 2; // output 39
// console.log(average);

// // Multiple assignments
// let x, y;
// x = y = (3 + 5) * 4 - 6; // assignment operator works right-to-left and thats why y isnt undefined. // 8 * 4 - 6 // 32 - 6 // 26
// console.log(x, y);

// // More operators
// // x = x * 2;
// x *= 2;
// console.log(x);
// // x = x + 10;
// x += 10;
// console.log(x);
// // Increment
// // x = x + 1;
// x++;
// console.log(x);
// // Decrement
// // x = x - 1;
// x--;
// console.log(x);

// /***************************
//  * Coding challange 1
//  */

// let markMass = 200;
// let markHeight = 1.9;

// let johnMass = 80;
// let johnHeight = 1.83;

// const markBMI = markMass / (markHeight * markHeight);
// const johnBMI = johnMass / (johnHeight * johnHeight);

// // const isMarkBigger = markBMI > johnBMI;

// // console.log(`Is Mark's BMI higher then Johns? ${isMarkBigger}`);

// /***************************
//  * If / else statement
//  */

// // const firstName = `Patric`;
// // const civilStatus = `single`;

// // if (civilStatus === "married") {
// //   console.log(`${firstName} is single!`);
// // } else {
// //   console.log(`${firstName} is married!`);
// // }

// // const isMarried = false;

// // if (isMarried) {
// //   console.log(`${firstName} is married!`);
// // } else {
// //   console.log(`${firstName} is single!`);
// // }

// // if (markBMI > johnBMI) {
// //   console.log(`Mark's BMI is higher than John's`);
// // } else {
// //   console.log(`John's BMI is higher than Mark's`);
// // }

// /***************************
//  * Boolean logic. &&-AND, ||-OR, !-NOT (reverse the boolean)
//  */
// // const firstName = "Patric";
// // const age = 30;

// // if (age < 13) {
// //   console.log(`${firstName} is only a boy.`);
// // } else if (age >= 13 && age < 20) {
// //   console.log(`${firstName} is a teenager.`);
// // } else if (age >= 20 && age < 30) {
// //   console.log(`${firstName} is a young man`);
// // } else {
// //   console.log(`${firstName} is a grown man.`);
// // }

// /***************************
//  * The ternary operator (3 operands, condition, if block, else block) and switch statement
//  */
// // const firstName = "Patric";
// // let age = 29;

// // // Ternary operator
// // age >= 18
// //   ? console.log(`${firstName} drinks beer.`)
// //   : console.log(`${firstName} drinks juice.`);

// // const drink = age >= 18 ? "beer" : "juice";
// // console.log(`${firstName} drinks ${drink}`);

// // Switch statement
// // let job = "teacher";

// // switch (job) {
// //   case "driver":
// //     console.log("Drives people around");
// //     break;

// //   case "cook":
// //     console.log("Cooks food for people");
// //     break;

// //   case "teacher":
// //     console.log("Teaches people");
// //     break;

// //   default:
// //     console.log("Just a man amoung the people");
// // }

// // switch (true) {
// //   case age < 13:
// //     console.log(`${firstName} is a boy`);
// //     break;

// //   case age < 20:
// //     console.log(`${firstName} is a teenager`);
// //     break;

// //   case age < 30:
// //     console.log(`${firstName} is a young man`);
// //     break;

// //   case age >= 30:
// //     console.log(`${firstName} is a man`);
// //     break;

// //   default:
// //     console.log("Are you even born yet?");
// // }

// /***************************
//  * Truthy and falsy values and equality operators
//  */

// // Falsy values: undefined, null, 0, '', NaN
// // truthy values: everything that is not falsy

// // let height;

// // if (height) {
// //   // falsy
// //   console.log("the variable height has been defined");
// // } else {
// //   console.log("the variable height has NOT been defined");
// // }

// // height = 0;

// // if (height || height === 0) {
// //   console.log("the variable height has been defined");
// // } else {
// //   console.log("the variable height has NOT been defined");
// // }

// /***************************
//  * Coding chanllange 2
//  */

// let johnScore = Math.floor((89 + 120 + 503) / 3);

// let mikeScore = Math.floor((89 + 120 + 503) / 3);

// let maryScore = Math.floor((89 + 120 + 503) / 3);

// // If / else statement
// if (johnScore > mikeScore && johnScore > maryScore) {
//   console.log(
//     `The winner is John's team with the average score of ${johnScore}`
//   );
// } else if (mikeScore > johnScore && mikeScore > maryScore) {
//   console.log(
//     `The winner is Mike's team with the average score of ${mikeScore}`
//   );
// } else if (maryScore > mikeScore && maryScore > johnScore) {
//   console.log(
//     `The winner is Mary's team with the average score of ${maryScore}`
//   );
// } else {
//   console.log("It's a draw!");
// }

// // Switch statement
// switch (true) {
//   case johnScore > mikeScore && johnScore > maryScore:
//     console.log(
//       `The winner is John's team with the average score of ${johnScore}`
//     );
//     break;

//   case mikeScore > johnScore && mikeScore > maryScore:
//     console.log(
//       `The winner is Mike's team with the average score of ${mikeScore}`
//     );
//     break;

//   case maryScore > johnScore && maryScore > mikeScore:
//     console.log(
//       `The winner is Mary's team with the average score of ${maryScore}`
//     );
//     break;

//   default:
//     console.log(`It's a draw!`);
// }

// /***************************
//  * Functions
//  */

// function calculateAge(birthYear) {
//   return 2018 - birthYear;
// }

// let ageJohn = calculateAge(1982);
// let ageMary = calculateAge(1990);
// console.log(ageJohn, ageMary);

// function yearsUntilRetirement(year, name) {
//   let age = calculateAge(year);
//   let retirement = 67 - age;

//   if (retirement > 0) {
//     console.log(`${name} retires in ${retirement} years`);
//   } else {
//     console.log(`${name} is already retired.`);
//   }
// }

// yearsUntilRetirement(1990, "Marcus");
// yearsUntilRetirement(1989, "John");
// yearsUntilRetirement(1942, "Mary");

// /***************************
//  * Function statement and expression
//  */

// // Function decleration
// // function whatDoYoDo(job, firstName) {}

// // Function expression
// let whatDoYoDo = function(job, firstName) {
//   switch (job) {
//     case "teacher":
//       return firstName + " teaches people.";

//     case "driver":
//       return firstName + " drives people.";

//     case "designer":
//       return firstName + " designs stuff.";

//     default:
//       return firstName + " does something else.";
//   }
// };

// console.log(whatDoYoDo("designer", "patric"));

// /***************************
//  * Arrays
//  */

// // Initilize new array
// let names = ["patric", "tobias", "daniel"];
// let years = new Array(1999, 1982, 1965);

// console.log(names[0]);
// console.log(names.length);

// // Mutate array data
// names[0] = "sophie";
// names[names.length] = "eva-lotte";
// console.log(names);

// // Different data types
// let sophie = ["sophie", "karlsson", 1978, "nurse", false];

// sophie.push("blue");
// sophie.unshift("Mrs.");
// console.log(sophie);

// sophie.pop();
// sophie.shift();
// console.log(sophie);

// console.log(sophie.indexOf(1978));
// console.log(sophie.indexOf("benny")); // Used to see if the element exists in the array. If it doesnt it will return -1.

// let isTeacher =
//   sophie.indexOf("teacher") === -1
//     ? "Sophie is not a teacher"
//     : "Sophie is a teacher";
// console.log(isTeacher);

// /***************************
//  * Coding challange 3
//  */
// let tips = [];
// let finalAmount = [];

// function tipCalculator(bill) {
//   if (bill < 50) {
//     tips.push(bill * 0.2);
//     finalAmount.push(bill * 1.2);
//   } else if (bill < 200) {
//     tips.push(bill * 0.15);
//     finalAmount.push(Math.floor(bill * 1.15));
//   } else {
//     tips.push(bill * 0.1);
//     finalAmount.push(bill * 1.1);
//   }
// }

// // With a loop
// // function tipCalculator(amountA, amountB, amountC) {
// //   for (i = 0; i < arguments.length; i++) {
// //     if (arguments[i] < 50) {
// //       tips.push(arguments[i] * 0.2);
// //       finalAmounts.push(arguments[i] * 1.2);
// //     } else if (arguments[i] <= 200) {
// //       tips.push(arguments[i] * 0.15);
// //       finalAmounts.push(arguments[i] * 1.15);
// //     } else {
// //       tips.push(arguments[i] * 0.1);
// //       finalAmounts.push(arguments[i] * 1.1);
// //     }
// //   }
// // }

// // tipCalculator(10, 100, 1000);
// tipCalculator(10);
// tipCalculator(100);
// tipCalculator(1000);

// console.log(finalAmount);
// console.log(tips);

// /***************************
//  * Objects and properties
//  */

// // Object literal
// var person = {
//   firstName: "Patric",
//   lastName: "Iskevi",
//   birthYear: 1982,
//   family: ["Kent", "Eva-lotte", "Daniel", "Tobias", "Sophie"],
//   isMarried: false
// };

// // Access values
// console.log(person.firstName);
// console.log(person["isMarried"]);
// var birth = person.birthYear;
// console.log(birth);

// // Mutate values
// person.isMarried = true;
// console.log(person);
// person["birthYear"] = 1064;
// console.log(person);

// // Object constructor
// let personOne = new Object();
// personOne.firstName = "Jane";
// personOne.lastName = "Austen";
// personOne.birthYear = 1972;

// console.log(personOne);

/***************************
 * Objects and methods
 */
// var person = {
//   firstName: "Patric",
//   lastName: "Iskevi",
//   birthYear: 1980,
//   family: ["Kent", "Eva-lotte", "Daniel", "Tobias", "Sophie"],
//   isMarried: false,
//   calcAge: function() {
//     this.age = 2018 - this.birthYear;
//   }
// };

// person.calcAge();
// console.log(person);

// /***************************
//  * Coding challange 4
//  */
// let mark = {
//   firstName: "Mark",
//   mass: 190,
//   height: 1.76,
//   calcBMI: function() {
//     this.bmi = this.mass / (this.height * 2);
//     return this.bmi;
//   }
// };

// let john = {
//   firstName: "John",
//   mass: 190,
//   height: 1.76,
//   calcBMI: function() {
//     this.bmi = this.mass / (this.height * 2);
//     return this.bmi;
//   }
// };

// if (mark.calcBMI() > john.calcBMI()) {
//   console.log(`${mark.firstName} has the higher BMI with ${mark.bmi}`);
// } else if (mark.calcBMI() < john.calcBMI()) {
//   console.log(`${john.firstName} has the higher BMI with ${john.bmi}`);
// } else {
//   console.log(
//     `${john.firstName} has the same BMI as ${mark.firstName} with ${john.bmi}`
//   );
// }

/***************************
 * Loops and iteration
 */
// GENERAL FOR-LOOP
// for (let i = 1; i <= 20; i++) {
//   console.log(i);
// }

// // PRINT THE EVEN NUMBERS
// for (let i = 1; i <= 20; i++) {
//   if (i % 2 === 0) {
//     console.log(i);
//   }
// }

// let john = ["John", "Smith", 1990, "designer", false];

// for (let i = 0; i < john.length; i++) {
//   console.log(john[i]);
// }

// WHILE-LOOP
// let i = 0;
// while (i < john.length) {
//   console.log(john[i]);
//   i++;
// }

// CONTINUE AND BREAK STATEMENTS

// for (let i = 0; i < john.length; i++) {
//   if (typeof john[i] !== "string") {
//     continue;
//   }
//   console.log(john[i]);
// }

// for (let i = 0; i < john.length; i++) {
//   if (typeof john[i] !== "string") {
//     break;
//   }
//   console.log(john[i]);
// }

// LOOPING BACKWARDS

// for (let i = john.length - 1; i >= 0; i--) {
//   console.log(john[i]);
// }

// FOR EACH-LOOP
// john.forEach(element => {
//   console.log(element);
// });

/***************************
 * CODING CHALLANGE 5
 */

// WITH A FOR-LOOP
// let johnTrip = {
//   amounts: [124, 48, 268, 180, 42],
//   tips: [],
//   totAmount: [],

//   tipCalc: function() {
//     for (let i = 0; i < this.amounts.length; i++) {
//       bill = this.amounts[i];

//       if (bill < 50) {
//         this.tips.push(bill * 0.2);
//         this.totAmount.push(bill * 1.2);
//       } else if (bill < 200) {
//         this.tips.push(bill * 0.15);
//         this.totAmount.push(bill * 1.15);
//       } else {
//         this.tips.push(bill * 0.1);
//         this.totAmount.push(bill * 1.1);
//       }
//     }
//   }
// };
// console.log(johnTrip.tipCalc());
// console.log(johnTrip);

// WHIT A FOREACH-LOOP
let john = {
  name: "John Smith",
  amounts: [124, 48, 268, 180, 42],
  tips: [],
  totAmount: [],

  tipCalc: function() {
    this.amounts.forEach(element => {
      if (element < 50) {
        this.tips.push(element * 0.2);
        this.totAmount.push(element * 1.2);
      } else if (element < 200) {
        this.tips.push(element * 0.15);
        this.totAmount.push(element * 1.15);
      } else {
        this.tips.push(element * 0.1);
        this.totAmount.push(element * 1.1);
      }
    });
  }
};

let mark = {
  name: "Mark Richards",
  amounts: [77, 475, 110, 45],
  tips: [],
  totAmount: [],

  tipCalc: function() {
    this.amounts.forEach(element => {
      if (element < 100) {
        this.tips.push(element * 0.2);
        this.totAmount.push(element * 1.2);
      } else if (element < 300) {
        this.tips.push(element * 0.1);
        this.totAmount.push(element * 1.1);
      } else {
        this.tips.push(element * 0.25);
        this.totAmount.push(element * 1.25);
      }
    });
  }
};

// SECOND PART
function calcAvg(tips) {
  let sum = 0;
  tips.forEach(element => {
    sum += element;
  });
  return sum / tips.length;
}

// DO THE CALCULATIONS
john.tipCalc();
mark.tipCalc();

john.average = calcAvg(john.tips);
mark.average = calcAvg(mark.tips);

console.log(john, mark);

if (john.average > mark.average) {
  console.log(
    `${john.name} has a higher tip average than ${
      mark.name
    } with an average of ${john.average}`
  );
} else {
  console.log(
    `${mark.name} has a higher tip average than ${
      john.name
    } with an average of ${mark.average}`
  );
}
