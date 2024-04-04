#! /usr/bin/env node
import chalk from "chalk";
import inquirer from "inquirer";


async function main(){ 
    const answer = await  inquirer.prompt([
        {
            type: "input",
            name : "value",
            message : chalk.yellowBright.italic("Enter a word or a number to check if it is Palindrome or not?")
        }
    ]);

    function reverseValue (value: string){
        let revValue = value.toString().split("").reverse().join("");
        return revValue
        

}
let valueToCompare = reverseValue(answer.value)

if (answer.value == valueToCompare){
    console.log(chalk.cyanBright.bold.italic(`${answer.value} is Palindrome`));
}else { 
    console.log(chalk.cyanBright.bold.italic(`${answer.value} is not Palindrome`));
    
}

}

main()