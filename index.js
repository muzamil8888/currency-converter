#! /usr/bin/env node
import inquirer from "inquirer";
const currency = {
    USD: 1, //BASE CURRENCY
    EUR: 0.91,
    GBP: 0.76,
    INR: 74.57,
    PKR: 280
};
let user_answer = await inquirer.prompt([
    {
        name: "from",
        message: "Enter from currency",
        type: "list",
        choices: ['USD', 'EUR', 'GBP', 'INR', 'PKR']
    },
    {
        name: "to",
        message: "Enter to currency",
        type: "list",
        choices: ['USD', 'EUR', 'GBP', 'INR', 'PKR']
    },
    {
        name: "amount",
        message: "Enter your amount here",
        type: "number",
    }
]);
let fromanswer = currency[user_answer.from];
let toamount = currency[user_answer.to];
let amount = user_answer.amount;
let base = amount / fromanswer;
let convert = base * toamount;
console.log(convert);
// console.log(fromanswer);
// console.log(toamount);
// console.log(amount);
