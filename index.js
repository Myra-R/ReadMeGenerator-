const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");
const writeFileAsync = util.promisify(fs.writeFile);

function promptUser() {
    return inquirer.prompt([
        {
            type: "input",
            name: "Title",
            message: "Enter project title here:",
        },
    
        {
            type: "input",
            name: "description",
            message: "Enter project description here:",
        },
        {
            type: "input",
            name: "installation",
            message: "Describe installation instructions here:",
        },
        {
            type: "input",
            name: "usage",
            message: "Provide usage information here:",
        },
        {
            type: "list",
            name: "license",
            message: "What are your options?",
            choices: ["MIT", "APACHE 2.0", "GPL 3.0", "BSD 3", "None"],
        },
        {

            type: "input",
            name: "contributing",
            message: "Provide contributing guidelines here:"
        },
        {
            type: "input",
            name: "test",
            message: "Provide test instructions here:"
        },
        {
            type: "input",
            name: "username",
            message: "What is your github username?"
        },
        {
            type: "input",
            name: "github",
            message: "Provide your GitHub URL"
        },
        {
            type: "input",
            name: "email",
            message: "Enter your email address"
        }
    ])
}
promptUser()
    //2. get data from questions (answers obj)
    .then(function (answers) {
        console.log(answers)
        //3. use the questions asked and plug into the generatehtml function
        const html = generateHTML(answers);
        //4. replace all variables with the answer object
        //5. template is done, now to create html file
    return writeFileAsync("sampleReadMe2.md", html),
    console.log("Successfully wrote to index.html");
    })
    .catch(function (err) {
        console.log(err);
    })
function generateHTML(answers) {
    return `
# ${answers.Title}
## Description:
${answers.description}
## Installation:
${answers.installation}
## Usage:
${answers.usage}
## License:
![license](https://img.shields.io/badge/${answers.license}-v1.0-green})
${answers.license}
## Contributing:
${answers.contributing}
## Test:
${answers.test}
## Username:
${answers.username}
## Github:
${answers.github}
## Email:
${answers.email}
# Table of contents: 
* [installation](#installation)
* [usage](#usage)
* [contributing](#contributing)
* [tests](#tests)
* [questions](#questions)
# Installation 
${answers.install}
# Usage:
${answers.usage}
# Contributing:
${answers.contributing}
# Tests:
${answers.tests}
# Questions:
${answers.questions}
    `
}


