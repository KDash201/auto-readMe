// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require('fs)');
const generateReadMe = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = () => {
    return inquirer.prompt([
        {
            type: "input",
            name: "title",
            message: "Enter the title of your project (Required)",
            validate: (titleInput) => {
                if (titleInput) {
                    return true;
                } else {
                    console.log("Please enter the title of your project!");
                    return false;
                }
            },
        },
        {
            type: "input",
            name: "description",
            message: "Enter the description of your project (Required)",
            validate: (descriptionInput) => {
                if (descriptionInput) {
                    return true;
                } else {
                    console.log("Please enter your description!");
                    return false;
                }
            },
        },
        {
            type: "input",
            name: "install",
            message: "Enter the installation steps for your project",
        },
        {
            type: "input",
            name: "usage",
            message: "Provide instructions and examples for use",
        },
        {
            type: "input",
            name: "credits",
            message: "List the collaborators and links to their GitHub profiles",
        },
        {
            type: "input",
            name: "license",
            message: "Enter your licenses for this project",
        },
        {
            type: "input",
            name: "badges",
            message: "Enter the badges for this project",
        },
        {
            type: "input",
            name: "features",
            message: "Enter the features for this project",
        },
        {
            type: "input",
            name: "contributing",
            message: "How should other developers contribute",
        },
        {
            type: "input",
            name: "gitHubName",
            message: "Enter your GitHub username (Required)",
            validate: (gitHubNameInput) => {
                if (gitHubNameInput) {
                    return true;
                } else {
                    console.log("Please enter your GitHub username!");
                    return false;
                }
            },
        },
        {
            type: "input",
            name: "gitHubLink",
            message: "Enter the link to your GitHub profile (Required)",
            validate: (gitHubLinkInput) => {
                if (gitHubLinkInput) {
                    return true;
                } else {
                    console.log("Please enter your GitHub link!");
                    return false;
                }
            },
        },
        {
            type: "input",
            name: "eMail",
            message: "Enter your E-Mail address (Required)",
            validate: (eMailInput) => {
                if (eMailInput) {
                    return true;
                } else {
                    console.log("Please enter your E-Mail address!");
                    return false;
                }
            },
        },
    ]);
};

console.log(questions);

// TODO: Create a function to write README file
fs.writeFile(readMe) writeToFile(fileName, data) { }

// TODO: Create a function to initialize app
function init() { }

// Function call to initialize app
init();
