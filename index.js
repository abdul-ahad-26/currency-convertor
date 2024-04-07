import inquirer from "inquirer";
const currency = {
    USD: 1,
    EURO: 0.91,
    GBP: 0.76,
    INR: 74.57,
    PKR: 280,
};
let userAnswer = await inquirer.prompt([
    {
        name: "from",
        message: "Enter from currency",
        type: "list",
        choices: ["USD", "EURO", "GBP", "INR", "PKR"]
    },
    {
        name: "to",
        message: "Enter to currency",
        type: "list",
        choices: ["USD", "EURO", "GBP", "INR", "PKR"]
    },
    {
        name: "amount",
        message: "Enter amount",
        type: "number"
    }
]);
//Base currency
let fromAmount = currency[userAnswer.from]; //euro: 0.91
let toAmount = currency[userAnswer.to]; //pkr : 280
let amount = userAnswer.amount;
let baseAmount = amount / fromAmount;
let convertedAmount = (baseAmount * toAmount).toFixed(2);
console.log(convertedAmount);
