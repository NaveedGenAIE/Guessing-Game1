import inquirer from "inquirer";
const randomNumbr = Math.floor(Math.random() * 6 + 1);
// console.log("randomNumbr: ", randomNumbr);
let guessNumber = await inquirer.prompt([
    {name:"guessNumber",
    message:"Guess The Number",
    type:"number"
},
])
if (guessNumber.name === randomNumbr){
    console.log(`Congratulation you Select correct ${randomNumbr}`);
    
}else{
    console.log(`NO Sorry`);
    
}