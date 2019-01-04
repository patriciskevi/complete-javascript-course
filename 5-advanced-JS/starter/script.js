// /*
// // OBJECT LITERAL
// // let john = {
// //     name: 'John',
// //     yearOfBirth: 1990,
// //     job: 'teacher'
// // };
// // FUNCTION CONSTRUCTOR
// let Person = function (name, yearOfBirth, job) {
//     this.name = name;
//     this.yearOfBirth = yearOfBirth;
//     this.job = job;
// };
// // INHERETENCE
// Person.prototype.calculateAge = function () {
//     console.log(2018 - this.yearOfBirth);
// };
// Person.prototype.lastName = 'Smith';
// //CREATING AN INSTANCE OF THE PERSON OBJECT
// let john = new Person('John', 1990, 'teacher');
// let jane = new Person('Jane', 1969, 'designer');
// let mark = new Person('Mark', 1948, 'retired');
// john.calculateAge();
// jane.calculateAge();
// mark.calculateAge();
// console.log(john.lastName, jane.lastName, mark.lastName);
// let Car = function (model, color, isFourWheel, engine) {
//     this.model = model;
//     this.color = color;
//     this.isFourWheel = isFourWheel;
//     this.engine = engine;
// };
// Car.prototype.calculateMileage = function () {
//     console.log(this.engine * 0.8);
// };
// let volvo = new Car('XC60', 'Ice White', false, 2.0);
// let jeep = new Car('Forester', 'Stone Black', true, 3.0);
// volvo.calculateMileage();
// jeep.calculateMileage();
// */
// // Object.create 
// /*
// let personProto = {
//     calculateAge: function () {
//         console.log(2018 - this.yearOfBirth);
//     }
// };
// let john = Object.create(personProto);
// john.name = 'John';
// john.yearOfBirth = 1990;
// john.job = 'teacher';
// let jane = Object.create(personProto, {
//     name: {
//         value: 'Jane'
//     },
//     yearOfBirth: {
//         value: 1969
//     },
//     job: {
//         value: 'designer'
//     },
// });
// */
// // PRIMITIVES VS OBJECTS
// // Primitive variables hold their own copy of the data, while object variables just points to/reference a place in memory
// // PRIMITIVES
// let a = 23;
// let b = a;
// a = 40;
// console.log(a, b)
// //OBJECTS
// let obj1 = {
//     name: 'John',
//     age: 26
// };
// let obj2 = obj1;
// obj1.age = 40;
// console.log(obj1.age, obj2.age);
// //FUNCTIONS
// let age = 27;
// let obj = {
//     name: 'Jonas',
//     city: 'Lisbon'
// };
// function change(a, b) {
//     a = 30;
//     b.city = 'San Francisco';
//     console.log(a);
// }
// change(age, obj);
// console.log(age, obj.city);
// // PASSING FUNCTIONS AS ARGUMENTS
// /*
// let years = [1990, 1965, 1937, 2005, 1998];
// function arrayCalc(arr, fn) {
//     let arrRes = [];
//     for (let i = 0; i < arr.length; i++) {
//         arrRes.push(fn(arr[i]));
//     }
//     return arrRes;
// }
// function calculateAge(el) {
//     return 2018 - el;
// }
// function isLegalAge(el) {
//     return el >= 18;
// }
// function maxHeartRateCalc(el) {
//     if (el >= 18 && el <= 81) {
//         return Math.round(206.9 - (0.67 * el));
//     } else {
//         return -1;
//     }
// }
// let ages = arrayCalc(years, calculateAge);
// console.log(ages);
// let legalAge = arrayCalc(ages, isLegalAge);
// console.log(legalAge);
// let maxHeartRate = arrayCalc(ages, maxHeartRateCalc);
// console.log(maxHeartRate);
// */
// // FUNCTIONS RETURNING FUNCTIONS
// /*
// function interviewQuestion(job) {
//     if (job === 'designer') {
//         return function (name) {
//             console.log(`${name}, can you please explain what UX design is?`);
//         };
//     } else if (job === 'teacher') {
//         return function (name) {
//             console.log(`What subject do you teach ${name}?`);
//         };
//     } else {
//         return function (name) {
//             console.log(`Hello ${name}, what do you do?`);
//         };
//     }
// }
// let designerQuestions = interviewQuestion('designer');
// let teacherQuestions = interviewQuestion('teacher');
// let otherJobQuestions = interviewQuestion('cab driver');
// designerQuestions('John');
// designerQuestions('Mark');
// designerQuestions('Jane');
// teacherQuestions('Mike');
// otherJobQuestions('Joan');
// */
// const ages = [10, 20, 30, 40, 50];
// function whatFunctionToRun(task) {
//     if (task === 'heartrate') {
//         return function (arr) {
//             for (let i = 0; i < arr.length; i++) {
//                 console.log(`Maximum heartrate for a person with the age of ${arr[i]} is = ${Math.round(206.9 - (0.67 * arr[i]))}`);
//             }
//         };
//     } else if (task === 'legal age') {
//         return function (arr) {
//             arr.forEach(element => {
//                 if (element >= 21) {
//                     console.log(`Your age is ${element} so your allowed to drink`);
//                 } else {
//                     console.log(`Your not allowed to drink because youre only ${element} years old`);
//                 }
//             });
//         };
//     }
// }
// let heartRate = whatFunctionToRun('heartrate');
// heartRate(ages);
// let legalAge = whatFunctionToRun('legal age');
// legalAge(ages);
// // IIFE
// function game() {
//     let score = (Math.random() * 10) + 1;
//     console.log(score >= 5);
// }
// game();
// // SAME AS ABOVE BUT AN IIFE
// (function () {
//     let score = (Math.random() * 10) + 1;
//     console.log(score >= 5);
// })();
// // PASSING IN ARGUMENT IN AN IIFE
// (function (goodLuckCharm) {
//     let score = (Math.random() * 10) + 1;
//     console.log(score >= 5 - goodLuckCharm);
// })(5);
// // CLOSURES
// function retirement(retirementAge) {
//     let message = ` years left until retirement`;
//     return function (yearOfBirth) {
//         let age = 2018 - yearOfBirth;
//         console.log((retirementAge - age) + message);
//     };
// }
// let retirementUS = retirement(66);
// let retirementSWE = retirement(67);
// retirement(66)(1990);
// retirementUS(1990);
// retirementSWE(1990);
// // REWRITE TO INTERVIEWQUESTION FUNCTION TO BE CLOSURE
// function interviewQuestion(job) {
//     return function (name) {
//         if (job === 'designer') {
//             console.log(`${name}, you work as a ${job}. Can you please explain what UX design is?`)
//         } else if (job === 'teacher') {
//             console.log(`${name}, you work as a ${job}. What subject do you teach?`)
//         } else {
//             console.log(`${name}, what do you do?`)
//         }
//     };
// }
// let designerQuestions = interviewQuestion('designer');
// let teacherQuestions = interviewQuestion('teacher');
// let otherJobQuestions = interviewQuestion('cab driver');
// interviewQuestion('designer')('John');
// designerQuestions('John');
// teacherQuestions('Jane');
// otherJobQuestions('Mark');
// BIND, CALL AND APPLY
// let john = {
//     name: 'John',
//     age: 26,
//     job: 'teacher',
//     presentation: function (style, timeOfDay) {
//         if (style === 'formal') {
//             console.log(`Good ${timeOfDay} ladies and gentlemen! Im ${this.name}, Im a ${this.job} and I'm ${this.age} years old.`);
//         } else if (style === 'friendly') {
//             console.log(`Hey! What's up? I'm ${this.name}, I'm a ${this.job} and I'm ${this.age} years old. Have a nice ${timeOfDay}.`);
//         }
//     }
// };
// let emily = {
//     name: 'Emily',
//     age: 35,
//     job: 'designer'
// };
// john.presentation('friendly', 'evening');
// john.presentation.call(emily, 'formal', 'morning');
// john.presentation.apply(emily, ['formal', 'morning']); //TAKES AN ARRAY AS SECOND ARGUMENT.
// let johnFriendly = john.presentation.bind(john, 'friendly');
// johnFriendly('evening');
// let emilyFormal = john.presentation.bind(emily, 'formal');
// emilyFormal('evening');
// //
// let years = [1991, 1965, 1937, 2006, 1999];
// function arrayCalc(arr, fn) {
//     let arrRes = [];
//     for (let i = 0; i < arr.length; i++) {
//         arrRes.push(fn(arr[i]));
//     }
//     return arrRes;
// }
// function calculateAge(el) {
//     return 2018 - el;
// }
// function isLegalAge(limit, el) {
//     return el >= limit;
// }
// let ages = arrayCalc(years, calculateAge);
// let legalJapan = arrayCalc(ages, isLegalAge.bind(this, 20));
// console.log(ages);
// console.log(legalJapan);



// CODING CHALLENGE
class Question {
    constructor(question, options, answer) {
        this.question = question;
        this.options = options;
        this.answer = answer;

    }
    game() {
        console.log(this.question);
        console.log(`0: ${this.options[0]}`);
        console.log(`1: ${this.options[1]}`);
        this.showQuestion();
    }

    showQuestion() {
        let userInput = '';

        while (userInput = prompt('Please select the correct answer (just type the number')) {

            if (String(userInput) !== this.answer) {
                console.log('Wrong answer, try again.');
            } else {
                break;
            }
        }
        console.log('Correct answer!');
    }

}
let questions = [];

questions.push(new Question('On which gaming console did Dark Souls release?', ['Playstation 4', 'Playstion 3'], '1'));
questions.push(new Question('Who is the president of USA?', ['Trump', 'Obama'], '0'));
questions.push(new Question('How many seasons have LeBron James been playing in the NBA', ['15', '16'], '1'));



let show = questions[Math.floor(Math.random() * questions.length)];

show.game();