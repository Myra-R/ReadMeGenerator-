const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");

// const generate = require('./Develop/utils/generateMarkdown');
// const generateMarkdown = require("./Develop/utils/generateMarkdown");

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
            name: "badge",
            message: "Enter badge title here title here:",
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
    ]);
}

 inquirer.prompt(questions).then(answers => {
  console.log(answer)
    const data, 
    
//    ${answer.badge} 
    
//     src=("https://img.shields.io/badge/${answers.badge}-v1.0-green}")
    // `
// })
// function generateHTML(answers) {
//     return `
//   ## ${answers.location}


//   Sometimes it's useful to have different levels of headings to structure your documents. Start lines with a to create headings. Multiple  in a row denote smaller heading sizes.
  
//   ### This is a third-tier heading
  
//   You can use one # all the way up to ###### six for different heading sizes.
  
//   If you'd like to quote someone, use the > character before the line:
  
//   > Coffee. The finest organic suspension ever devised... I beat the Borg with it.
//   > - Captain Janeway
// `
// }
// 1. prompt questions
promptUser()
    //2. get data from questions (answers obj)
    .then(function (answers) {
        //3. use the questions asked and plug into the generatehtml function
        const html = generateHTML(answers);
        //4. replace all variables with the answer object
        //5. template is done, now to create html file
        return writeFileAsync("README.md", html);
    })
    .then(function () {
        console.log("Successfully wrote to index.html");
    })
    .catch(function (err) {
        console.log(err);
    });



// function generateHTML(answers) {
//     return  `
//     <!DOCTYPE html>
//     <html lang="en">
//     <head>
//       <meta charset="UTF-8">
//       <meta http-equiv="X-UA-Compatible" content="ie=edge">
//       <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css">
//       <title>Document</title>
//     </head>
//     <body>
//       <div class="jumbotron jumbotron-fluid">
//       <div class="container">
//         <h1 class="display-4">Hi! My name is ${answers.name}</h1>
//         <p class="lead">I am from ${answers.location}.</p>
//         <h3>Example heading <span class="badge badge-secondary">Contact Me</span></h3>
//         <ul class="list-group">
//           <li class="list-group-item">My GitHub username is ${answers.github}</li>
//           <li class="list-group-item">LinkedIn: ${answers.linkedin}</li>
//         </ul>
//       </div>
//     </div>
//     </body>
//     </html>`;
// }
// //1. prompt questions
// promptUser()
//     //2. get data from questions (answers obj)
//     .then(function (answers) {
//         //3. use the questions asked and plug into the generatehtml function
//         const html = generateHTML(answers);
//         //4. replace all variables with the answer object
//         //5. template is done, now to create html file
//         return writeFileAsync("index.html", html);
//     })
//     .then(function () {
//         console.log("Successfully wrote to index.html");
//     })
//     .catch(function (err) {
//         console.log(err);
//     });

