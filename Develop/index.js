// require the inquirer node package
var inquirer = require("inquirer");
// require fs since we are writing and editing files
const fs = require("fs");
// require util since we are going to use promisify
const util = require("util");
// require the other js files that contain the needed code
var api = require("./utils/api.js");
// require the markdown file
var markdown = require("./utils/generateMarkdown");

// define the questions as a constant variable to be asked when creating the readme since they will never change
const questions = [
  {
    type: "input",
    name: "github",
    message: "What is your user name?"
  },
  {
    type: "input",
    name: "title",
    message: "What is your project name?"
  },
  {
    type: "input",
    name: "description",
    message: "Please give a short description of your project."
  },
  {
    type: "input",
    name: "installation",
    message: "What commands should be run to install dependencies?"
  },
  {
    type: "input",
    name: "usage",
    message: "What does the user need to know about using the repo?"
  },
  {
    type: "rawlist",
    name: "license",
    message: "What kind of license should your project have?",
    choices: ["MIT", "APACHE 2.0", "GPL 3.0", "BSD", "3"]
  },
  {
    type: "input",
    name: "contributing",
    message: "What does the user need to know about contributing to the repo?"
  },
  {
    type: "input",
    name: "test",
    message: "What commands should be used to run tests?"
  }
];

// call inquirer
inquirer
  // prompt the questions
  .prompt(questions)
  // promise to get user input data
  .then(function(data){
    //console.log(data.github);
      fs.writeFile("README_CHY.md", markdown(data), function(error){
        if (error){
          console.log(error);
        }
      });
    });

//function writeToFile(fileName, data) {}
    
//function init() {}
