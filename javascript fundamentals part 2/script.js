// /////////////// Using strict mode /////////////////
// "use strict";
// let hasDriversLicense = false;
// const passTest = true;

// if (passTest) hasDriversLicense = true;
// if (hasDriversLicense) console.log("You are able to drive");

// // const interface = false; error (reserved word)
// // const private = false; error (reserved word)

// ////////////////// functions /////////////////////

// function greeter(myName) {
//   console.log(`Hello ${myName}`);
// }

// // function calling, invoking
// greeter("Ahmad");

// function printDetail(myName, myAge, myJob) {
//   console.log(`My name is ${myName}`);
//   console.log(`My Age: ${myAge}`);
//   console.log(`My job ${myJob}`);
// }

// printDetail("Ahmad", 20, "programmer");

// function juiceProducer(apples, oranges) {
//   console.log(apples, oranges);

//   const juice = `You want ${apples} apples juices
//     and ${oranges} orange juices`;

//   return juice;
// }

// juiceProducer(2, 0);
// const appleJuice = juiceProducer(2, 0);
// console.log(appleJuice);

// const appleOrangeJuice = juiceProducer(2, 4);
// console.log(appleOrangeJuice);

// // function declaration //
// // const age1 = calcAge1(2002);
// function calcAge1(birthYear) {
//   return 2022 - birthYear;
// }
// const age1 = calcAge1(2002);

// // function expression
// const calcAge2 = function (birthYear) {
//   return 2022 - birthYear;
// };

// const age2 = calcAge2(2002);
// console.log(age1, age2);

// // Arrow functions
// // NOTE Arrow function don't support this keyword
// const calcAge3 = (birthYear) => 2022 - birthYear;
// console.log(calcAge3(2002));

// const yeatsUntilRetirement = (birthYear, firstName) => {
//   const age = calcAge3(birthYear);
//   const retirementAge = 60 - age;
//   return `${firstName} retires in ${retirementAge} years`;
// };

// const calcYearsLeft = yeatsUntilRetirement(2002, "Ahmad");
// console.log(calcYearsLeft);

// // function calling another function
// const cutFruitPieces = (fruit) => {
//   return fruit * 4;
// };

// const fruitProcessor = (apples, oranges) => {
//   // calling another function
//   const applePieces = cutFruitPieces(apples);
//   const orangePieces = cutFruitPieces(oranges);

//   const juice = `Juice with ${applePieces} pieces of apples and ${orangePieces} pieces of orages`;
//   return juice;
// };

// console.log(fruitProcessor(2, 4));

// const calcAge = (birthYear) => {
//   return 2022 - birthYear;
// };

// const yearLeftRetirement = (firstName, birthYear) => {
//   const calcAge1 = calcAge(2002);
//   const retirementAge = 65 - calcAge1;

//   if (retirementAge > 0) {
//     console.log(`${firstName} retires in ${retirementAge} years`);
//     return retirementAge;
//   }

//   return -1;
// };

// console.log(yearLeftRetirement("Ahmad", 2002));

// ////////////////////// Arrays ///////////////////
// const friends = ["Ahmad", "Ali", "Bilal"];
// const birthYear = new Array(2002, 2004, 2008);

// console.log(friends);
// friends[0] = "Waleed";
// console.log(friends);

// console.log(friends.length);

// console.log(birthYear);

// const firstName = "Ahmad";
// const Ahmad = [firstName, "Asif", 2022 - 2002, "programmer", friends];
// console.log(Ahmad);

// const _calcAge = (birthYear) => {
//   return 2022 - birthYear;
// };

// // Basic functions
// const newLength = friends.push("Faizan");
// console.log(friends);
// console.log(newLength);

// // Add to the begining
// friends.unshift("John");
// console.log(friends);

// // Removes the last element
// const poppedElement = friends.pop();
// console.log(poppedElement);
// console.log(friends);

// // Removes the first element
// friends.shift();
// console.log(friends);

// console.log(friends.indexOf("Waleed"));

// // ES6 method
// console.log(friends.includes("Waleed")); // returns boolean value
// console.log(friends.includes("23"));

// if (friends.includes("Waleed")) {
//   console.log("You have a friend called waleed");
// }

// ////////////// Objects //////////////////

// // for accessing unstructured data by keys
// // key value pair
// const ahmad = {
//   firstName: "Ahmad",
//   lastName: "Asif",
//   age: 2022 - 2002,
//   job: "programmer",
//   friends: ["John", "Steven", "Michael"],
// };

// console.log(ahmad.firstName);
// console.log(ahmad["first" + "Name"]);
// console.log(ahmad["lastName"]);

// const nameKey = "Name";
// console.log(ahmad["first" + nameKey]);
// console.log(ahmad["last" + nameKey]);

// const interestedIn = prompt(
//   "What do you want to know about ahmad? Choose between firstName, lastName, age, job, friends"
// );
// if (ahmad[interestedIn]) {
//   console.log(ahmad[interestedIn]);
// } else {
//   console.log(
//     "Wrong request!! Choose between firstName, lastName, age, job, friends"
//   );
// }

// ahmad.location = "Pakistan";
// ahmad["twitter"] = "@ahmadasif";
// console.log(ahmad);

// console.log(
//   `${ahmad.firstName} has ${ahmad.friends.length} friends and his best friend is ${ahmad.friends[2]}`
// );

// // Objects Methods
// const ahmad = {
//   firstName: "Ahmad",
//   lastName: "Asif",
//   birthYear: 2002,
//   job: "programmer",
//   hasDriverLicense: true,

//   // calcAge: function () {
//   //   return 2022 - this.birthYear;
//   // },

//   calcAge: function () {
//     console.log(this);
//     this.age = 2022 - this.birthYear;
//     return this.age;
//   },

//   getSummary: function () {
//     if (this.hasDriverLicense) {
//       console.log(
//         `${this.firstName} is a ${this.calcAge()} years old ${
//           this.job
//         } and he has a driver's license`
//       );
//     } else {
//       console.log(
//         `${this.firstName} is a ${this.calcAge()} years old ${
//           this.job
//         } and he has not a driver's license`
//       );
//     }
//   },
// };

// console.log(ahmad.calcAge());
// console.log(ahmad.age);
// // console.log(ahmad["calcAge"]());
// console.log(ahmad.getSummary());

// ///////////////////// LOOPS ////////////////////////////

// for (let i = 1; i <= 10; i++) {
//   console.log("Repetition ", i);
// }

// let i = 0;
// while (i <= 5) {
//   console.log("repititon : ", i);
//   i++;
// }

// // Nested for loops
// for (let i = 0; i < 3; i++) {
//   console.log("Exercise: ", i);

//   for (var j = 0; j < 5; j++) {
//     console.log("repetition: ", j);
//   }
// }

// // Break and continue
// const arr = [12, 44, 55, 78, 100];

// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] === 44) continue; // skips the 44
//   console.log(arr[i]);
// }

// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] === 55) {
//     console.log("Number found at index" + i);
//     break; // break the entire for loop
//   }
// }

// // While loops
// let rep = 0;
// while (rep <= 5) {
//   console.log("Repetition: ", i);
//   rep++;
// }

// // Using math library
// let dice = Math.random() * 6 + 1;

// while (dice !== 6) {
//   console.log(`You rolled ${dice}`);
//   dice = Math.trunc(Math.random() * 6 + 1);
// }
