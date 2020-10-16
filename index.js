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
    return writeFileAsync("README.md", html),
    console.log("Successfully wrote to index.html");
    })
    .catch(function (err) {
        console.log(err);
    })
function generateHTML(answers) {
    return `# ${answers.title}
    ${answers.license}
    ${answers.description}
    # Table of contents: 
    <a href="#install">Installation</a><br>
    <a href="#usage">Usage</a><br>
    <a href="#contributing">Contributing</a><br>
    <a href="#tests">Tests</a><br>
    <a href="#questions">Questions</a><br>
    # Installation 
    <a id="install">${answers.install}</a>
    # Usage
    <a id="#usage">${answers.usage}</a>
    # Contributing
    <a id="#contributing">${answers.contributing}</a>
    # Tests
    <a id="#tests">${answers.tests}</a>
    # Questions
    <a id="#questions">${answers.questions}</a>
    `
    // <!DOCTYPE html>
    // <html lang="en">
    // <head>
    //   <meta charset="UTF-8">
    //   <meta http-equiv="X-UA-Compatible" content="ie=edge">
    //   <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css">
    //   <title>Document</title>
    // </head>
    // <body>
    //   <div class="jumbotron jumbotron-fluid">
    //   <div class="container">
    //     <h1 class="display-4">Hi! My name is ${answers.name}</h1>
    //     <p class="lead">I am from ${answers.location}.</p>
    //     <h3>Example heading <span class="badge badge-secondary">Contact Me</span></h3>
    //     <ul class="list-group">
    //       <li class="list-group-item">My GitHub username is ${answers.github}</li>
    //       <li class="list-group-item">LinkedIn: ${answers.linkedin}</li>
    //     </ul>
    //   </div>
    // </div>
    // </body>
    // </html>`;
}


