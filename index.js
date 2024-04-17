#! /usr/bin/env node
import inquirer from "inquirer";
const randomNumbr = Math.floor(Math.random() * 6 + 1);
console.log("randomNumbr: ", randomNumbr);
let guessNumber = await inquirer.prompt([
    { name: "guess1Number",
        message: "Guess The Number",
        type: "number"
    },
]);
if (guessNumber.guess1Number === randomNumbr) {
    console.log(`Congratulation you Select correct ${randomNumbr}`);
}
else {
    console.log(`NO Sorry`);
}
