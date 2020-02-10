const prompt = require("prompt-sync")({ sigint: true });

function displayTime(time) {
  const number = Number(time.slice(0, -1));
  const char = time[time.length - 1];

  let timeStr = "";
  if (char === "d") {
    timeStr = "Day";
  } else if (char === "w") {
    timeStr = "Week";
  } else if (char === "m") {
    timeStr = "Month";
  } else if (char === "y") {
    timeStr = "Year";
  }
  if (number !== 1) {
    timeStr += "s";
  }
  return `${number} ${timeStr}`;
}

function numberOfDays(time) {
  const timeConversion = {
    d: 1,
    w: 7,
    m: 30,
    y: 365
  };
  const number = Number(time.slice(0, -1));
  const char = time[time.length - 1];

  return number * timeConversion[char];
}

const initialInvestment = Number(prompt("Initial Investment (5000$): "));
const timeFrame = prompt("Time Frame(2d, 7d, 1w, 4w, 1m, 12m, 1y, 5y): ");
const growthRate = Number(
  prompt(`Growth Rate for every ${displayTime(timeFrame)} (5%): `)
);
const totalTime = prompt(
  "Total Time Investing (1d, 7d, 1w, 4w, 1m, 12m, 1y, 5y): "
);

console.log(`Initial Investment = ${initialInvestment}$`);
console.log(`Time Frame = ${displayTime(timeFrame)}`);
console.log(`Growth Rate = ${growthRate}% every ${displayTime(timeFrame)}`);
console.log(`Total Time Investing = ${displayTime(totalTime)}`);

const frameDays = numberOfDays(timeFrame);
const totalDays = numberOfDays(totalTime);

const growth = 1 + growthRate / 100;
let money = initialInvestment;

let rows = [];
let day = 0;
while (day < totalDays) {
  rows.push([day, money]);
  console.log(day, money);
  if (day + frameDays >= totalDays) {
    const daysLeft = totalDays - day;
    money *= 1 + (growthRate * (daysLeft / frameDays)) / 100;
    break;
  }
  money *= growth;
  day += frameDays;
}
console.log(totalDays, money);
rows.push([day, money]);

module.exports = rows;
