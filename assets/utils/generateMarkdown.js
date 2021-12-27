// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string.
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {  
  if (license === "MIT") {
    return "[MIT](https://opensource.org/licenses/MIT)";
  } else if (license === "GNU") {
    return "[GNU](https://www.gnu.org/licenses/gpl-3.0.html)";
  } else if (license === "Apache") {
    return "[Apache 2.0](https://www.apache.org/licenses/LICENSE-2.0)";
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(answers) {
  return `# ${answers.title}

## Description

*${answer.description}

## Table of Contents

* [Installation] (#Installation)
* [Usage](#Usage)
* [Contributing](#Contributing)
* [License Info](#LicenseInfo)

## Installation
* ${answer.install}

## Usage
* ${answers.usage}

## Credits
* ${answers.credits}

## License Info


## Contributing
* ${answers.contributing}


## For Additonal Questons

* Link to GitHub profile: https://github.com/${answers.gitHubName}


`;
}

module.exports = generateMarkdown;
