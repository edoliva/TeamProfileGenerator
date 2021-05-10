// Packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown2 = require('./utils/generateMarkdown')
const Engineer = require("./lib/Engineer");
const Manager = require("./lib/Manager");
const Intern = require("./lib/Intern");
var managerArray = [];
var engineerArray = [];
var internArray = [];

// Array of questions for user input
const managerQuestions = [
    { type: 'input', name: 'managerName', message: 'What is the team managers name?', },
    { type: 'input', name: 'managerID', message: 'What is the team managers employee ID number?', },
    { type: 'input', name: 'managerEmail', message: 'What is the team managers email address?', },
    { type: 'input', name: 'officeNum', message: 'What is the team managers office number?', },
]

const employeeTypeQuestion = [
    {
        type: "list",
        name: "employeeType",
        message: "Which employee type would you like to add?",
        choices: ["Engineer", "Intern", "None, I am done making my team."],
    },
]

const engineerQuestions = [
    { type: 'input', name: 'engineerName', message: 'What is the team engineers name?', },
    { type: 'input', name: 'engineerID', message: 'What is the team engineers employee ID number?', },
    { type: 'input', name: 'engineerEmail', message: 'What is the team engineers email address?', },
    { type: 'input', name: 'ghUsername', message: 'What is the team engineers GitHub username?', },

]

const internQuestions = [
    { type: 'input', name: 'internName', message: 'What is the team interns name?', },
    { type: 'input', name: 'internID', message: 'What is the team interns employee ID number?', },
    { type: 'input', name: 'internEmail', message: 'What is the team interns email address?', },
    { type: 'input', name: 'school', message: 'What school does the team intern attend?', },

]

function writeToFile(file, data) {
    fs.writeFile(file, data, (err) =>
        err ? console.log(err) : console.log('Your team profile is ready!')
    );
}

// Function to initialize app
function init() {
    inquirer
        .prompt(
            managerQuestions
        )
        .then((answers) => {
            const manager = new Manager(answers.managerName, answers.managerID, answers.managerEmail, answers.officeNum)
            managerArray.push(manager);
            engineerOrIntern();
        })
}

function engineerOrIntern() {
    inquirer
        .prompt(
            employeeTypeQuestion
        )
        .then((answers) => {
            if (answers.employeeType === "Engineer") {
                engineerFunction();
            }
            if (answers.employeeType === "Intern") {
                internFunction();
            }
            if (answers.employeeType === "None, I am done making my team.") {
                console.log(answers);
                console.log(managerArray)
                console.log(engineerArray)
                console.log(internArray)
                const fileName = `Team-${managerArray[0].name.split(' ').join('')}.html`;
                const tempLit = generateMarkdown2(managerArray, engineerArray, internArray);
                writeToFile(fileName, tempLit);
            }
        })
}

function engineerFunction() {
    inquirer
        .prompt(
            engineerQuestions
        )
        .then((answers) => {
            const engineer = new Engineer(answers.engineerName, answers.engineerID, answers.engineerEmail, answers.ghUsername)
            engineerArray.push(engineer);
            engineerOrIntern();
        })
}

function internFunction() {
    inquirer
        .prompt(
            internQuestions
        )
        .then((answers) => {
            const intern = new Intern(answers.internName, answers.internID, answers.internEmail, answers.school)
            internArray.push(intern);
            engineerOrIntern();
        })
}

init();