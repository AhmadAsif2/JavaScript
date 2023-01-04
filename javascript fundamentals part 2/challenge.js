// // Coding challenge 1

// const calcAverage = (score1, score2, score3) => (score1 + score2 + score3) / 3;

// const checkWinner = function (avgDolphins, avgKoalas) {
//   if (avgDolphins > avgKoalas * 2) {
//     console.log(`Dolphins win ${avgDolphins} vs ${avgKoalas}`);
//   } else if (avgKoalas > avgDolphins * 2) {
//     console.log(`Koalas win ${avgKoalas} vs ${avgDolphins}`);
//   } else {
//     console.log("no team wins");
//   }
// };

// const avgDolphins = calcAverage(44, 23, 71);
// const avgKoalas = calcAverage(65, 54, 49);

// checkWinner(avgDolphins, avgKoalas);

// // Coding Challenge 2

// const calcTip = (billValue) => {
//   const tip =
//     billValue >= 50 && billValue <= 300 ? billValue * 0.15 : billValue * 0.2;
//   return tip;
// };

// const bills = [125, 555, 44];
// const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];

// const totals = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];

// console.log(bills);
// console.log(tips);
// console.log(totals);

// Coding Challenge 3
// const mark = {
//   fullName: "Mark Miller",
//   mass: 78,
//   height: 1.69,

//   calcBMI: function () {
//     this.markBMI = this.mass / this.height ** 2;
//     return this.markBMI;
//   },
// };

// const john = {
//   fullName: "John Smith",
//   mass: 92,
//   height: 1.95,

//   calcBMI: function () {
//     this.johnBMI = this.mass / this.height ** 2;
//     return this.johnBMI;
//   },
// };

// if (mark.calcBMI() > john.calcBMI()) {
//   console.log(
//     `${mark.fullName} BMI ${mark.markBMI} is higher than ${john.fullName} BMI ${john.johnBMI}`
//   );
// } else {
//   console.log(
//     `${john.fullName} BMI ${john.johnBMI} is higher than ${mark.fullName} BMI ${mark.markBMI}`
//   );
// }

// Coding Challenge 4

const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips = [];
const totals = [];

const calcTip = (billValue) => {
  for (let i = 0; i < billValue.length; i++) {
    let tipCalc =
      billValue[i] >= 50 && billValue[i] <= 300
        ? billValue[i] * 0.15
        : billValue[i] * 0.2;
    tips.push(tipCalc);
    totals.push(tipCalc + billValue[i]);
  }
};
// const calcTip = (bill) => {
//   return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
// };

// for (let i = 0; i < bills.length; i++) {
//   const tip = calcTip(bills[i]);
//   tips.push(tip);
//   totals.push(tip + bills[i]);
// }

calcTip(bills);
console.log(bills, totals, tips);

const calcAverage = (arr) => {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  //   console.log(sum);
  return sum / arr.length;
};

console.log("Average: " + calcAverage(totals));
