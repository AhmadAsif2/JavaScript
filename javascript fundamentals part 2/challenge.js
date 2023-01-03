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
const mark = {
  fullName: "Mark Miller",
  mass: 78,
  height: 1.69,

  calcBMI: function () {
    this.markBMI = this.mass / this.height ** 2;
    return this.markBMI;
  },
};

const john = {
  fullName: "John Smith",
  mass: 92,
  height: 1.95,

  calcBMI: function () {
    this.johnBMI = this.mass / this.height ** 2;
    return this.johnBMI;
  },
};

if (mark.calcBMI() > john.calcBMI()) {
  console.log(
    `${mark.fullName} BMI ${mark.markBMI} is higher than ${john.fullName} BMI ${john.johnBMI}`
  );
} else {
  console.log(
    `${john.fullName} BMI ${john.johnBMI} is higher than ${mark.fullName} BMI ${mark.markBMI}`
  );
}
