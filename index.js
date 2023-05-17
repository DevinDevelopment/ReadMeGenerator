// imports. requrire is needed to use functions defined in generateMarkdown file
// inquirer is a node.js library and is need to ask questions in command line and store answers
// fs needed to gain access to file structor functions 
const generateMarkdown = require('./utils/generateMarkdown');
const inquirer = require('inquirer');
const fs = require('fs');

// this is used as a question bank
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

// this is a function created to write to a file. 
// we will use this function in the .then section of the inquirer function.
function writeToFile(fileName, data) {
  fs.appendFile(fileName, data, (err) =>
    // TODO: Describe how this ternary operator works
    err ? console.error(err) : console.log('Success'))
}

// this function is the actuall inquirer which will ask questions in the command line 
// then will store answers in response
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
      name: "license",
      choices: ['MIT', 'Mozilla', 'IBM', 'Eclipse', 'none'],
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
  // take the respone(users answers) and call the writeToFile function we created
  // the data perameter will take the users response and push to our generateMarkdown function from the generateMarkdown file
  // generateMarkdown will be a function we are calling from another file which is why import require is needed
  .then((response) =>
    writeToFile('GeneratedREADME.MD', generateMarkdown.generateMarkdown(response))
  );
}

// Function call to initialize app
init();
