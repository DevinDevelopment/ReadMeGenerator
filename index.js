// TODO: Include packages needed for this application
const generateMarkdown = require('./utils/generateMarkdown');
const inquirer = require('inquirer');
const fs = require('fs');
// title of my project and sections entitled Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions

// TODO: Create an array of questions for user input
const questions = [
  'What is your title?',
  'What is the discription?',
  'Enter installation instructions.',
  'How do you use the application?',
  'Which licenses were included?',
  'What are the contributon guidlines?',
  'What are the test instructions?',
  'Enter your github for questions.',
  'Enter your email for questions.'
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  fs.appendFile(fileName, data, (err) =>
    // TODO: Describe how this ternary operator works
    err ? console.error(err) : console.log('Success'))
}

// TODO: Create a function to initialize app
function init() {
    inquirer
  .prompt([
    {
      type: 'input',
      message: questions[0],
      name: 'title',
    },
    {
      type: 'input',
      message: questions[1],
      name: 'discription',
    },
    {
      type: 'input',
      message: questions[2],
      name: 'installation',
    },
    {
      type: 'input',
      message: questions[3],
      name: 'usage',
    },
    {
      type: 'list',
      message: questions[4],
      name: "licenses",
      choices: ['MIT', 'Mozilla', 'IBM', 'Eclipse'],
    },
    {
      type: 'input',
      message: questions[5],
      name: 'contributions',
    },
    {
      type: 'input',
      message: questions[6],
      name: 'tests',
    },
    {
      type: 'input',
      message: questions[7],
      name: 'questions1',
    },
    {
      type: 'input',
      message: questions[8],
      name: 'questions2',
    },
  ])
  .then((response) =>
    writeToFile('README.MD', generateMarkdown.generateMarkdown(response))
  );
}

// Function call to initialize app
init();
