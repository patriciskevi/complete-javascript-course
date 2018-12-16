///////////////////////////////////////
// Lecture: Hoisting
calcAge(1990);

// FUNCTION DECLARATION - GETS HOISTED
function calcAge(year) {
    console.log(2018 - year);
}
calcAge(1982);

// FUNCTION EXPRESSION - DOES NOT GET HOISTED
// retirement(1990); // THIS WILL NOT WORK BECAUSE HOISTING IS NOT DONE ON retirement()
let retirement = function (year) {
    console.log(65 - (2018 - year));
};
retirement(1982);

// VARIABLES
// console.log(age); // WILL NOT WORK BECAUSE HOISTING IS NOT DONE ON THE AGE VARIABLE
let age = 23;

function foo() {
    // console.log(age); // WILL NOT WORK BECAUSE HOISTING IS NOT DONE ON THE AGE VARIABLE
    let age = 65;
    console.log(age);
}
foo(); // OUTPUT 65 BECAUSE OF VARIABLE SCOOPE. THIS age INSIDE foo() IS BLOCK LEVELED SCOOPED.
console.log(age); // OUTPUT 23 BECAUSE OF VARIABLE SCOOPE. THIS age IS GLOBAL SCCOPED.



///////////////////////////////////////
// Lecture: Scoping



// First scoping example


// let a = 'Hello!';
// first();

// function first() {
//     let b = 'Hi!';
//     second();

//     function second() {
//         let c = 'Hey!';
//         console.log(a + b + c);
//     }
// }



// Example to show the differece between execution stack and scope chain


let a = 'Hello!';
first();

function first() {
    let b = 'Hi!';
    second();

    function second() {
        let c = 'Hey!';
        third();
    }
}

function third() {
    let d = 'John';
    // console.log(c); third() DOES NOT HAVE ACCESS TO VARIABLE C BECAUSE OF SCOOPING.
    console.log(a + d);
}




///////////////////////////////////////
// Lecture: The this keyword

//console.log(this);

// calcAge(1985);

// function calcAge(year) {
//     console.log(2018 - year);
//     console.log(this);
// }

let john = {
    name: 'john',
    yearOfBirth: 1990,
    calcAge: function () {
        console.log(this);
        console.log(2018 - this.yearOfBirth);

        function innerFunction() {
            console.log(this); // OUTPUTS THE WINDOW OBJECT, AND THAT'S BECAUSE ITS NOT A METHOD BUT A REGULAR FUNCTION
            // AND THERE FOR THE this REFERS TO THE GLOBAL OBJECT AND NOT THE john OBJECT- THE WINDOW OBJECT.
        }
        innerFunction();
    }
};
john.calcAge();

let mike = {
    name: 'Mike',
    yearOfBirth: 1984
};

mike.calcAge = john.calcAge; // METHOD BORROWING
mike.calcAge();