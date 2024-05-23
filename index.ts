#! /usr/bin/env node
import inquirer from "inquirer"
const answers: {
    Sentence: string;
} = await inquirer.prompt([
    {
        name: "Sentence",
        type: "input",
        message: "Enter Your Sentence to Count the Word: "
    }
])
const words = answers.Sentence.trim().split(" ")
console.log(words)
console.log(` Your sentence word count is ${words.length}`);
