// Packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown.js')
const Engineer = require("./lib/Engineer");
const Manager = require("./lib/Manager");
const Intern = require("./lib/Intern");

// Array of questions for user input
const questions = [ 
  {type: 'input', name: 'employeeType', message: 'REQUIRED: What is the title of this Read Me?',},
  {type: 'input', name: 'projectDescription', message: 'REQUIRED: Enter a description of this project.',},
  {type: 'input', name: 'deployedLink', message: 'REQUIRED: Enter the deployed/live link for this project.',},
  {type: 'input', name: 'githubLink', message: 'REQUIRED: Enter the GitHub Repo link.',},
  {type: 'input', name: 'userCriteria', message: 'REQUIRED: What must the user do or know when using this application?',},
  {type: 'input', name: 'Tests', message: 'REQUIRED: Enter test instructions.',},
  {type: 'input', name: 'githubUsername', message: 'REQUIRED: Enter your GitHub username.',},

] 
// Function to initialize app
function init() {
    console.log("Enter Employee info.")
      inquirer
      .prompt(
        questions
    )
    
    // Function to write README file
    .then( (answers) => {
        switch(answers.employeeType) {
            case "Manager" : 
                const manager = new Manager(answers.employeeName, answers.ID, answers.email, answers.officeNum);
                // add manager to array
                
                


            }
            if (ansers.finished) {

    //     const fileName = `README-${answers.fileName.split(' ').join('')}.md`;
    //     const tempLit = generateMarkdown (answers);
    //     writeToFile (fileName, tempLit);
                
            } else {init()};
            

    });
  }

init();