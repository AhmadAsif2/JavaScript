// Coding challenge 1

const calcAverage = (score1, score2, score3) => (score1 + score2 + score3) / 3;

const checkWinner = function (avgDolphins, avgKoalas) {
  if (avgDolphins > avgKoalas * 2) {
    console.log(`Dolphins win ${avgDolphins} vs ${avgKoalas}`);
  } else if (avgKoalas > avgDolphins * 2) {
    console.log(`Koalas win ${avgKoalas} vs ${avgDolphins}`);
  } else {
    console.log("no team wins");
  }
};

const avgDolphins = calcAverage(44, 23, 71);
const avgKoalas = calcAverage(65, 54, 49);

checkWinner(avgDolphins, avgKoalas);

// Coding Challenge 2

const calcTip = (billValue) => {
  const tip =
    billValue >= 50 && billValue <= 300 ? billValue * 0.15 : billValue * 0.2;
  return tip;
};

const bills = [125, 555, 44];
const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];

const totals = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];

console.log(bills);
console.log(tips);
console.log(totals);
