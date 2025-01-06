// TODO: Include packages needed for this application
import inquirer from 'inquirer';
import fs from 'fs';
import generateMarkdown from './utils/generateMarkdown.js';

// TODO: Create an array of questions for user input
const questions = [
    {
        type:'input',
        name:'title',
        message:'What is your project\'s name?',
    },
    {
        type:'input',
        name:'description',
        message:'Please write a short description of your project.',
    },
    {
        type:'input',
        name:'installation',
        message:'What command should be run to install dependencies?',
    },
    {
        type:'input',
        name:'usage',
        message:'What does the user need to know about using the repo?',
    },
    {
        type:'input',
        name:'contribute',
        message:'What does the user need to know about contributing to the repo?',
    },
    {
        type:'input',
        name:'tests',
        message:'What command should be run to run tests?',
    },
    {
        type:'input',
        name:'github',
        message:'What is your GitHub username?',
    },
    {
        type:'input',
        name:'email',
        message:'What is your email address?',
    },
    {
        type: 'checkbox',
        message: 'What kind of license should your project have?',
        name: 'license',
        choices: ['MIT', 'APACHE 2.0', 'GPL 3.0', 'BSD 3', 'None'], 
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    console.log(data.license);
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
