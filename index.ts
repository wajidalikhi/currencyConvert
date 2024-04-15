#! /usr/bin/env node

import inquirer from "inquirer";

const currency: any = {
  USD: 1, //Base currency
  EUR: 0.91,
  GBP: 0.76,
  INR: 74.57,
  PKR: 280,
  KWD: 550,
};
let userAnswer = await inquirer.prompt([
  {
    name: "from",
    message: "Enter From Currency",
    type: "list",
    choices: ["USD", "EUR", "GBP", "INR", "PKR", "KWD"],
  },
  {
    name: "to",
    message: "Enter to currency",
    type: "list",
    choices: ["USD", "EUR", "GBP", "INR", "PKR", "KWD"],
  },
  {
    name: "amount",
    message: "Enter Your Amount",
    type: "number",
  },
]);

let fromamount = currency[userAnswer.from]; //Exchange rate
let toamount = currency[userAnswer.to]; //Exchange rate
let amount = userAnswer.amount;
let baseAmount = amount / fromamount; //USD base currency // 4
let convertedAmount = baseAmount * toamount;
console.log(convertedAmount.toFixed(2));
// console.log(fromamount);
// console.log(toamount);
// console.log(amount);

