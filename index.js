// TODO: Include packages needed for this application
import inquirer from 'inquirer';
import fs from 'fs';
import generateMarkdown from './utils/generateMarkdown.js';

// TODO: Create an array of questions for user input
const questions = [
    {
        type:'input',
        name:'title',
        message:'What is the project title?',
    },
    {
        type:'input',
        name:'description',
        message:'What is the description of the project?',
    },
    {
        type:'input',
        name:'installation',
        message:'How is the application installed?',
    },
    {
        type:'input',
        name:'usage',
        message:'How is the application used?',
    },
    {
        type:'input',
        name:'contribue',
        message:'What are the guidelines for contributing?',
    },
    {
        type:'input',
        name:'tests',
        message:'Are there any tests and if so, how are they run?',
    },
    {
        type:'input',
        name:'github',
        message:'What is your github username?',
    },
    {
        type:'input',
        name:'email',
        message:'What is your email address?',
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName,generateMarkdown(data),(err) => err ? console.log(err) : console.log('Read me file created.'))
}

// TODO: Create a function to initialize app
function init() {
    inquirer
        .prompt(questions)
        .then((data)=>{writeToFile('README.md',data)})
}

// Function call to initialize app
init();
