// /////////// Values and variables ///////////
// console.log("hello World");

// let firstName = "Ahmad";
// let lastName = "Asif";

// console.log(firstName + " " + lastName);

// let PI = 3.14;
// console.log(PI);

// let country = "Pakistan";
// let continent = "Asia";
// let population = "22 Crore";

// console.log("Country " + country);
// console.log("Continent " + continent);
// console.log("Population " + population);

// //////////// Data Types ///////////
// let isValid = true;
// console.log(isValid);
// console.log(typeof isValid);

// // primitive types
// let number = 12;
// let isIsland = true;
// let floatingNumber = 12.43;
// let year;

// console.log(typeof number);
// console.log(typeof floatingNumber);
// console.log(typeof year);
// console.log(isIsland);

// isValid = "FUN!";
// console.log(typeof isValid);

// /////////// let const and var //////////////

// // Mutable
// // let birthDate = 2002;
// // birthDate = 2003;
// // console.log(birthDate);

// const birthDate = 2002;
// // birthDate = 2003; error
// console.log(birthDate);

// // NOTE let and var are not same
// var job = "programm";
// job = "js developer";
// console.log(job);

// //////////// BASIC OPERATORS //////////////////

// let age = 2022 - 2002;
// let age1 = 2022 - 2004;

// let number1 = 2;
// number1++;
// number1 *= 2;
// number1--;

// console.log(number1); // 5

// console.log(age > age1);
// console.log(age * 2);
// console.log(age1 / 2);
// console.log(2 ** 3);

// let isValidAge = age1 >= 18;
// console.log(isValidAge);

// ///////////// template strings ///////////////

// const myName = "Ahmad";
// const myJob = "programmer";
// const currYear = 2022;

// const ahmad =
//   "I am, " + myName + " a " + (currYear - birthDate) + " years old " + myJob;
// console.log(ahmad);

// // using back ticks to write template literal string
// const ahmadNew = `I am ${myName} a ${currYear - birthDate} years old ${myJob}`;
// console.log(ahmadNew);

// console.log("Multiple \nlines \n");
// console.log(`Multiple
// lines
// `);

// ////////// conditional statement //////////

// const age = 12;

// if (age >= 18) {
//   console.log("You are able to drive");
// } else {
//   const yearLeft = 18 - age;
//   console.log(`You are ${yearLeft} years left to drive`);
// }

// const year = 2022;
// let century;

// if (year <= 2020) {
//   century = 20;
// } else {
//   century = 21;
// }

// console.log(`You are in ${century} century`);

// //////////////// Type Conversion and Coercion /////////////

// // type conversion
// const inputYear = "1991";
// console.log(Number(inputYear));
// console.log(inputYear + 12);

// console.log(Number("Ahmad"));
// console.log(typeof NaN);

// console.log(String(23), 23);

// // type coercion
// console.log("i am " + 20 + " years old");
// console.log("23" - "10" - "3");
// console.log("23" * "2");
// console.log("23" / 2);

// let n = "1" + 1;
// n = n - 1;
// console.log(n); // 11

// /////////////// Truthy and falsy values ///////////////

// 5 falsy values 0, '', undefined, null, NaN

// console.log(Boolean(null));
// console.log(Boolean("Ahmad"));
// console.log(Boolean(undefined));
// console.log(Boolean(""));
// console.log(Boolean({}));
// console.log(Boolean(NaN));

// const money = 100;
// if (money) {
//   console.log("Dont't spend it all ;)");
// } else {
//   console.log("you should get a job");
// }

// let height = 1.8;
// if (height) {
//   console.log("YAY height is defined!");
// } else {
//   console.log("Heigh is undefined");
// }

// ////////// ==(loose) vs ====(tight) //////////

// const age = 18;

// if (age === 18) {
//   console.log("You are an adult :D (tight)");
// } else {
//   console.log("you are not adult ;)");
// }

// // loose check
// // sometimes make your code buggy
// const newAge = "18";
// if (newAge == 18) {
//   console.log("you are an adult (loose)");
// } else {
//   console.log("you are not adule (loose)");
// }

// const number = Number(prompt("Enter the number"));

// // tight check
// // good practice
// if (number === 23) {
//   console.log("23 is a cool number :D");
// } else if (number == 9) {
//   console.log("9 is also a cool number");
// } else {
//   console.log("the number is neither 23 nor 9");
// }

// if (number !== 23) {
//   console.log("your number is not 23");
// }

// if (number != 23) {
//   console.log("your number is not 23");
// }

////////// logical operator ///////////////

// const isTired = false;
// const isValidAge = true;
// const isLicense = true;

// if (isTired && isValidAge && isLicense) {
//   console.log("You are able to drive");
// } else {
//   console.log("You should not drive");
// }

// if (isValidAge || !isLicense) {
//   console.log("you are able to drive");
// } else {
//   console.log("you are not able to drive");
// }

// //////// switch statement //////////////
// const day = "tuesday";

// switch (day) {
//   case "monday":
//     console.log("working day");
//     console.log("learning is fun");
//     break;

//   case "tuesday":
//     console.log("learning react is fun");
//     break;

//   case "wednesday":
//   case "thursday":
//     console.log("learning node.js");
//     break;

//   case "friday":
//     console.log("learning blockchain development");
//     break;
//   default:
//     console.log("not a valid day");
// }

// ////////////// ternary operator /////////////

const age = 20;

// 1
age >= 18
  ? console.log("you are able to drive")
  : console.log("you are not able to drive");

// 2
const flag = age >= 18 ? "able to drive" : "not able to drive";
console.log(flag);

// 3
console.log(`you are ${age >= 18 ? "able" : "not able"} to drive`);
