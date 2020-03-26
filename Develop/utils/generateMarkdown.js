// require axios since we are going to call the gitHub API
const axios = require("axios");

var avatar_url;
var email;

 function getUser(username){
      axios
      .get(
        `https://api.github.com/users/${username}`
      )
      .then(function(results){
        avatar_url = results.data.avatar_url;
        email = results.data.email;
        //console.log(results);
        console.log(avatar_url);
        console.log(email);
        // comment- this return does not seem to update my new values for the URL and email?  The console log pulls the correct information.  However, since this return doesn't update, the values don't populate down below under Questions when creating the markdown.  
        return avatar_url, email;
      })
      .catch(err => {
        console.log(`User not found`);
        console.log(err);
        process.exit(1);
      });
      }


function generateProjectUrl(github, title) {
  const kebabCaseTitle = title.toLowerCase().split(" ").join("-");
  return `https://github.com/${github}/${kebabCaseTitle}`;
}

function renderLicenseBadge(license, github, title) {
  if (license !== "None") {
    return `[![GitHub license](https://img.shields.io/badge/license-${license}-blue.svg)](${generateProjectUrl(github, title)})`
  }
  return ''
}

function renderLicenseSection(license) {
  if (license !== "None") {
    return (
      `## License

This project is licensed under the ${license} license.`
    )
  }
  return ''
}

function generateMarkdown(data) {
  getUser(data.github);
  return `
# ${data.title}
${renderLicenseBadge(data.license, data.github, data.title)}

## Description

${data.description}

## Table of Contents 

* [Installation](#installation)

* [Usage](#usage)

* [License](#license)

* [Contributing](#contributing)

* [Tests](#tests)

* [Questions](#questions)

## Installation

To install necessary dependencies, run the following command:

\`\`\`
${data.installation}
\`\`\`

## Usage

${data.usage}

${renderLicenseSection(data.license)}
  
## Contributing

${data.contributing}

## Tests

To run tests, run the following command:

\`\`\`
${data.test}
\`\`\`

## Questions

<img src="${avatar_url}" alt="avatar" style="border-radius: 16px" width="30" />

If you have any questions about the repo, open an issue or contact [${data.github}](${data.url}) directly at ${email}.

`;
}

module.exports = generateMarkdown;
