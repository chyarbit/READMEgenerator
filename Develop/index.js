// require the inquirer node package
var inquirer = require("inquirer");
// require fs since we are writing and editing files
const fs = require("fs");
// require axios since we are going to call the gitHub API
const axios = require("axios");
// require util since we are going to use promisify
const util = require("util");
// require the other js files that contain the needed code
//var api = require("./utils/api.js");
//var markdown = require("./utils/generateMarkdown");

// define the questions as a constant variable to be asked when creating the readme since they will never change
const questions = [
  {
    type: "input",
    name: "username",
    message: "What is your user name?"
  },
  {
    type: "input",
    name: "projectname",
    message: "What is your project name?"
  },
  {
    type: "input",
    name: "description",
    message: "Please give a short description of your project."
  },
  {
    type: "confirm",
    name: "table",
    message: "Do you want to create a table of contents?"
  },
  {
    type: "input",
    name: "install",
    message: "What commands should be run to install dependencies?"
  },
  {
    type: "input",
    name: "needtoknow",
    message: "What does the user need to know about using the repo?"
  },
  {
    type: "rawlist",
    name: "licenseoptions",
    message: "What kind of license should your project have?",
    choices: ["MIT", "APACHE 2.0", "GPL 3.0", "BSD", "3"]
  },
  {
    type: "input",
    name: "contributions",
    message: "What does the user need to know about contributing to the repo?"
  },
  {
    type: "input",
    name: "testcommands",
    message: "What commands should be used to run tests?"
  }
];

// define the promises for photo and email
const appendPhotoAsync = util.promisify(fs.appendFile);
const appendEmailAsync= util.promisify(fs.appendFile);
const readPhotoAsync = util.promisify(fs.readFile);
const readEmailAsync = util.promisify(fs.readFile);

// call inquirer
inquirer
  // prompt the questions
  .prompt(questions)
  // promise to get
  .then(async function({
    username,
    projectname,
    description,
    table,
    install,
    needtoknow,
    licenseoptions,
    contributions,
    testcommands
  }) {
    //axios call
    // run the promise function with the username as the username (The deconstructed object) as the parameter
    const queryUrl = `https://api.github.com/users/${username}`;
    //Use the `axios` module to send a GET request to the `queryUrl`. The response object returned from the request should contain a `data` property which should be an array of the user's GitHub repos.
    axios.get(queryUrl).then(function(response) {
      console.log(response.data);
      //store the request data in a variable
      var photo = response.data.avatar_url;
      var email = response.data.email;
    // Append the photo and email to README_CHY.txt
    appendPhotoAsync("README_CHY.md", response.data.avatar_url).then(function(){
    readPhotoAsync("README_CHY.md", "utf8").then(function(data){
    })})
    appendEmailAsync("README_CHY.md", response.data.email).then(function(){
    readEmailAsync("README_CHY.md", "utf8").then(function(data){
})})})});
//function writeToFile(fileName, data) {}
    
//function init() {}
