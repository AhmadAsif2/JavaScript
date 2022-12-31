// Challenge 1 + 2
// const markMass = 78;
// const markHeight = 1.69;
// const johnMass = 92;
// const johnHeight = 1.95;

// const markBMI = markMass / markHeight ** 2;
// const johnBMI = johnMass / johnHeight ** 2;
// const markHigherBMI = markBMI > johnBMI;
// console.log(markBMI, johnBMI, markHigherBMI);

// if (markHigherBMI) {
//   console.log(`Mark's BMI ${markBMI} is higher than John's BMI ${johnBMI}`);
// } else {
//   console.log(`John's BMI ${johnBMI} is higher than Mark's BMI ${markBMI}`);
// }

// Challenge 3
const dolphinsAverageScore = (97 + 112 + 101) / 3;
const koalasAverageScore = (109 + 95 + 123) / 3;

if (dolphinsAverageScore >= 100 || koalasAverageScore >= 100) {
  if (dolphinsAverageScore > koalasAverageScore) {
    console.log("Dolphins win!");
  } else if (koalasAverageScore > dolphinsAverageScore) {
    console.log("Koalas win!");
  } else {
    console.log("Both win the trophy");
  }
} else {
  console.log("No team win the trophy Score less than 100");
}

const day = "tuesday";

switch (day) {
  case "monday":
    console.log("working day");
    console.log("learning is fun");
    break;

  case "tuesday":
    console.log("learning react is fun");
    break;

  case "wednesday":
  case "thursday":
    console.log("learning node.js");
    break;

  case "friday":
    console.log("learning blockchain development");
    break;
  default:
    console.log("not a valid day");
}
