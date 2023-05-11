// TODO: Include packages needed for this application
const generateMarkdown = require('./utils/generateMarkdown');
const inquirer = require('inquirer');
const fs = require('fs');
// title of my project and sections entitled Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions

// TODO: Create an array of questions for user input
const questions = [

];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {
    inquirer
  .prompt([
    {
      type: 'input',
      message: 'What is your title?',
      name: 'title',
    },
    {
      type: 'input',
      message: 'What is the discription?',
      name: 'discription',
    },
    {
      type: 'input',
      message: 'What is the Table of Contents',
      name: 'contents',
    },
    {
      type: 'input',
      message: 'Enter installation instructions.',
      name: 'installation',
    },
    {
      type: 'input',
      message: 'How do you use the application?',
      name: 'usage',
    },
    {
      type: 'checkbox',
      message: 'Which licenses were included',
      name: "licenses",
      choices: ['HTML', 'CSS', 'JavaScript', 'MySQL'],
    },
    {
      type: 'input',
      message: 'Who are the contributors?',
      name: 'contributors',
    },
    {
      type: 'input',
      message: 'What are some tests made?',
      name: 'tests',
    },
  ])
  .then((response) =>
    fs.appendFile('README.MD', generateMarkdown.generateMarkdown(response), (err) =>
    // TODO: Describe how this ternary operator works
    err ? console.error(err) : console.log('Success'))
  );
}

// Function call to initialize app
init();
