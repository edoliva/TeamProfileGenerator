// Packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown')
const Engineer = require("./lib/Engineer");
const Manager = require("./lib/Manager");
const Intern = require("./lib/Intern");
var managerArray = [];
var engineerArray = [];
var internArray = [];

// Array of questions for user input
const initQuestion = [ 
  { type: "list",
  name: "employeeType",
  message: "Which employee type would you like to add?",
  choices: ["Manager", "Engineer", "Intern", "None, I am done making my team."],},
]
const managerQuestions = [
  {type: 'input', name: 'managerName', message: 'What is the team managers name?',},
  {type: 'input', name: 'managerID', message: 'What is the team managers employee ID number?',},
  {type: 'input', name: 'officeNum', message: 'What is the team managers office number?',},
  {type: 'input', name: 'managerEmail', message: 'What is the team managers email address?',},
]
const engineerQuestions = [
  {type: 'input', name: 'engineerName', message: 'What is the team engineers name?',},
  {type: 'input', name: 'engineerID', message: 'What is the team engineers employee ID number?',},
  {type: 'input', name: 'ghUsername', message: 'What is the team engineers GitHub username?',},
  {type: 'input', name: 'engineerEmail', message: 'What is the team engineers email address?',},
]
const internQuestions = [ 
  {type: 'input', name: 'internName', message: 'What is the team interns name?',},
  {type: 'input', name: 'internID', message: 'What is the team interns employee ID number?',},
  {type: 'input', name: 'school', message: 'What school does the team intern attend?',},
  {type: 'input', name: 'internEmail', message: 'What is the team interns email address?',},
] 

function writeToFile(file, data) {
  fs.writeFile(file, data, (err) =>
  err ? console.log(err) : console.log('Your team profile is ready!')
  );
}

function managerFunction () {
    inquirer
    .prompt(
      managerQuestions
  ) 
  .then( (answers) => {
    managerArray.push(answers.managerName)
    managerArray.push(answers.managerID)
    managerArray.push(answers.officeNum)
    managerArray.push(answers.managerEmail)
      init();
    })}

function engineerFunction () {
  inquirer
  .prompt(
    engineerQuestions
) 
  .then( (answers) => {
    engineerArray.push(answers.engineerName)
    engineerArray.push(answers.engineerID)
    engineerArray.push(answers.ghUsername)
    engineerArray.push(answers.engineerEmail)
      init();
    })}

function internFunction () {
  inquirer
  .prompt(
    internQuestions
) 
  .then( (answers) => {
    internArray.push(answers.internName)
    internArray.push(answers.internID)
    internArray.push(answers.school)
    internArray.push(answers.internEmail)
      init();
    })}

// Function to initialize app
function init() {
      inquirer
      .prompt(
        initQuestion
    )
    // Function to prompt user with questions based on input
    .then( (answers) => {
      if (answers.employeeType === "Manager") {
        managerFunction ()
      }
      if (answers.employeeType === "Engineer") {
        engineerFunction ()
      }
      if (answers.employeeType === "Intern") {
        internFunction ()
      } 
      if (answers.employeeType === "None, I am done making my team.") {
        console.log(answers);
        console.log(managerArray)
        console.log(engineerArray)
        console.log(internArray)
        const fileName = `Team-${managerArray[0].split(' ').join('')}.html`;
        const tempLit = generateMarkdown(managerArray, engineerArray, internArray);
        writeToFile (fileName, tempLit);
      }

        // switch(answers.employeeType) {
        //   case "Manager": 
        //     const manager = new Manager(answers.managerName, answers.managerID, answers.managerEmail, answers.officeNum);
        
        //         // add manager to array
                
        //     }
            // if (answers.finished) {    
            // } else {init()};

    })
  }


init();