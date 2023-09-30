'use strict';
// function calcAge(birthYear) {
//   const age = 2023 - birthYear;
//   //lets decler same variable name to check which value will be printed
//   console.log(firstName);
//   function printAge() {
//     const firstName = 'Sheikh Arslan';
//     const output = `${firstName}, you are ${age}, Born in ${birthYear}`;
//     console.log(output);
//   }
//   // Blocked Sscope
//   if (birthYear >= 1990 && birthYear <= 1999) {
//     var millinial = true; //var is pre ES6 variable so it does not applies the scoping rules that why ot is accesable outside blocked scope they are just function scoped
//     const str = `You are late 20's Kid, ${firstName}`;
//     console.log(str);
//     function add(a, b) {
//       return a + b;
//     }
//   }
//   console.log(millinial);
//   //console.log(add(1, 2)); // functions are also blocked scope unlike const and var in ES6 so its not allowed to access outside block scope but if we clear the strict mode from above it will work also
//   // blocked scope Ends here
//   //console.log(str); //error because out of block scope variable is not found applies only on const and let type variables
//   printAge();
//   return age;
// }
// //console.log(millinial); // Not allowed becuse it decleared in function scope and trying to access in global scope
// //error because function is trying to access first name before it initialized
// // calcAge(1999);
// // const firstName = 'Sheikh';
// //true Order fo calling function that uses global scoped variable
// const firstName = 'Sheikh';
// calcAge(1999);

// const val = function (a, b) {
//   return a + b;
// };
// console.log(val);
//---------------------------------------------All about this Keyword--------------------------------------//
//console.log(this); //window Object
//Regular Funvtion Call
// const calcAge = function (birthYear) {
//   console.log(2023 - birthYear);
//   console.log(this); //undefined
// };
// calcAge(1999);
// //Arrow Function Call
// const calcAgeArrow = birthYear => {
//   console.log(2023 - birthYear);
//   console.log(this); //it will point out parent scope in this cas it will bw window object (Lexial Refrence)
// };
// calcAgeArrow(1999);
//Object
// const Employee = {
//   birthYear: 1999,
//   calcAge: function () {
//     console.log(this);
//     console.log(2023 - this.birthYear); //here this keyword pointing to the owner of function in this it is employee object so birtyear is comming from there
//   },
// };
// //in this case this keyword points employee birthyear because employee object is calling this fuction and employee is the owner
// Employee.calcAge();
// //another Example to prove the statement
// const Boss = {
//   birthYear: 1990,
// };
// Boss.calcAge = Employee.calcAge; //this method is called mathod borrowing
// //in this case this keyword points boss birthyear because boss object is calling this fuction and know boss is the owner
// Boss.calcAge();
// // Another Example

// const f = Boss.calcAge;
// //f(); //undefined this keyword its because no owner object exit and function becomes regular function call thats why this keyword is undefined(as its in the rules)
//------------------------------------------Another Example for regular function vs Arrow Function
const Employee = {
  firstName: 'Sheikh',
  birthYear: 1999,
  calcAge: function () {
    console.log(this);
    console.log(2023 - this.birthYear); //here this keyword pointing to the owner of function in this it is employee object so birtyear is comming from there
  },
  greeting: () => console.log(`hey ${this.firstName}`),
};
Employee.greeting(); //here first name will be undefined its because greeting function have global scope again remember objects dont have its ow scope in between curly braces they are just object literals
