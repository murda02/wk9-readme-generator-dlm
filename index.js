/*
GIVEN a command-line application that accepts user input
WHEN I am prompted for information about my application repository
THEN a high-quality, professional README.md is generated with the title of my project and sections entitled Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions
WHEN I enter my project title
THEN this is displayed as the title of the README
WHEN I enter a description, installation instructions, usage information, contribution guidelines, and test instructions
THEN this information is added to the sections of the README entitled Description, Installation, Usage, Contributing, and Tests
WHEN I choose a license for my application from a list of options
THEN a badge for that license is added near the top of the README and a notice is added to the section of the README entitled License that explains which license the application is covered under
WHEN I enter my GitHub username
THEN this is added to the section of the README entitled Questions, with a link to my GitHub profile
WHEN I enter my email address
THEN this is added to the section of the README entitled Questions, with instructions on how to reach me with additional questions
WHEN I click on the links in the Table of Contents
THEN I am taken to the corresponding section of the README
*/

const inquirer = require('inquirer');
const fs = require('fs');

inquirer
  .prompt([
    {
        type: 'input',
        name: 'title',
        message: 'What is project title?',
        validate: (value)=>{if(value){return true} else {return 'please enter a title'}}
    },
    {
        type: 'input',
        name: 'description',
        message: 'Please provide a description of your project:',
    },
    {
        type: 'input',
        name: 'installation',
        message: 'Please provide installation instructions:',
      },
        {
        type: 'input',
        name: 'usage',
        message: 'Please provide usage information:',
      },
    {
        type: 'input',
        name: 'contributionguidelines',
        message: 'Please provide contribution guidelines:',
    },
    {
        type: 'input',
        name: 'testinstructions',
        message: 'Please provide test instructions:',
    },
    {
        type: 'checkbox',
        message: 'Please select a license:',
        name: 'license',
        choices: ['Apache License 2.0', 'MIT', 'GNU General Public License v3.0', 'Mozilla Public License 2.0'],
        },
    {
        type: 'input',
        name: 'github',
        message: 'What is your GitHub profile name?',
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email?',
    },
  ])
  .then((data) => {
    const filename = `README.md`;
    const { title, description, installation, usage, contributionguidelines, testinstructions, license, github, email} = data;
    let readMeContent = 
    `# ${title}

## Table of Contents

* [Description](#description)
* [Installation](#installation)
* [Usage](#usage)
* [Contributing](#contributing)
* [Tests](#test)
* [License](#license)
* [Questions](#question)

## Description

${description}

## Installation

${installation}

## Usage

${usage}

## Contributing

${contributionguidelines}

## Tests

${testinstructions}

## License

${license}

## Questions
Contact me at:
* [GitHub](https://github.com/${github})
* [Email](mailto:${email})`;

    fs.writeFile(filename, readMeContent, (error) => { /* handle error */ });
  })