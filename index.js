// Required modules and declarations.
const inquirer = require("inquirer")
const fs = require("fs")
const path = require("path")
const generateMarkdown = require("./utils/generateMarkdown")
const markDown = "gnerateMarkdown"
const readMe = "README.MD"
const MITUrl = "https://img.shields.io/badge/license-MIT-green"
const AURUrl = "https://img.shields.io/badge/license-Apache-blue"
const noneUrl = "https://img.shields.io/badge/None-No%20License-lightgrey"
const licenseUrl = "";

// Array of questions (objects) for user.
const questions = [
    {
        type: "input",
        name: "title",
        message: "What is your project title?"
    },
    {
        type: "input",
        name: "description",
        message: "Briefly describe your project."
    },
    {
        type: "input",
        name: "installation",
        message: "Explain any necessary installation instructions."
    },
    {
        type: "input",
        name: "usage",
        message: "What are some use cases for your application?"
    },
    {
        type: "input",
        name: "contributors",
        message: "Who are all the contributors to this project?"
    },
    {
        type: "input",
        name: "test",
        message: "Describe any tests that are used with your project."
    },
    {
        type: "list",
        name: "license",
        message: "What license does the application use?",
        choices: ["MIT", "AUR", "None/Other"]
    },
    {
        type: "input",
        name: "username",
        message: "What is your Github username?"
    },
    {
        type: "input",
        name: "email",
        message: "What is your email address?"
    },
];

// Function to write README file.
function writeToFile(filename, answers, URL) {
    return fs.writeFileSync(path.join(process.cwd(), readMe), generateMarkdown(answers, URL));
}

// Function to initialize program.
function init() {
    inquirer.prompt(questions).then(function (answers, URL) {
        var answers = answers;
        if (answers.license == "MIT") {
            URL = MITUrl;
        }
        else if (answers.license == "AUR") {
            URL = AURUrl;
        }
        else {
            URL = noneUrl;
        }
        writeToFile(readMe, answers, URL);

    })

}

// function call to initialize program
init();
