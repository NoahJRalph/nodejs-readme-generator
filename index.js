// TODO: Include packages needed for this application
const fs = require(`fs`);
const inquirer = require(`inquirer`);
// TODO: Create an array of questions for user input
const fillMD = ({projectTitle, description, installation, usage, contributionGuidelines, testInstructions, license, licenseBadge, githubUser, email}) =>
`# ${projectTitle}

${licenseBadge}

## Table of Contents

- [Description](#Description)
- [Installation](#Installation)
- [Usage](#Usage)
- [Contribution Guidelines](#Contribution_Guidelines)
- [Test Instructions](#Test_Instructions)
- [License](#License)
- [Questions?](#Questions?)

## Description

${description}

## Installation

${installation}

## Usage

${usage}

## Contribution Guidelines

${contributionGuidelines}

## Test Instructions

${testInstructions}

## License

This project is protected under the ${license}.

## Questions?

Reach out to me either on [GitHub](https://github.com/${githubUser}) or by [Email](mailto:${email})!
`;
inquirer
    .prompt([
        {
            type: `input`,
            name: `projectTitle`,
            message: `What is the title of your project?`,
        },
        {
            type: `input`,
            name: `description`,
            message: `What is the description of your project?`,
        },
        {
            type: `input`,
            name: `installation`,
            message: `How do you install your project?`,
        },
        {
            type: `input`,
            name: `usage`,
            message: `How does the average user go about using your project?`,
        },
        {
            type: `input`,
            name: `contributionGuidelines`,
            message: `What would you consider your project's contribution guidelines, if someone else was to contribute?`,
        },
        {
            type: `input`,
            name: `testInstructions`,
            message: `How does the average user go about testing your project?`,
        },
        {
            type: `list`,
            name: `license`,
            message: `Which license would you prefer to protect your project?`,
            choices: [`MIT License`,`GNU GPLv3 License`,`Apache License 2.0`],
            default: `MIT License`,
        },
        {
            type: `input`,
            name: `githubUser`,
            message: `What is your GitHub username?`,
        },
        {
            type: `input`,
            name: `email`,
            message: `What is your full email?`,
        },
    ])
    .then((promptInput) => {
        switch (promptInput.license) {
            case `MIT License`:
                promptInput.licenseBadge = `![This project's protection license.](https://img.shields.io/badge/license-MIT-blue)`;
                break;
            case `GNU GPLv3 License`:
                promptInput.licenseBadge = `![This project's protection license.](https://img.shields.io/badge/license-GNU GPLv3-blue)`;
                break;
            case `Apache License 2.0`:
                promptInput.licenseBadge = `![This project's protection license.](https://img.shields.io/badge/license-Apache License 2.0-blue)`;
                break;
            default:
                promptInput.licenseBadge = `![This project's protection license.](https://img.shields.io/badge/license-MIT-blue)`;
                break;
        }
        const mdContent = fillMD(promptInput);
        fs.writeFile(`ReadMe.md`, mdContent, (error) =>
        error ? console.log(error) : console.log(`Successfully created your ReadMe!`)
        );
    });
/*

Here's my leading question: why do it this way when I could just uhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
};

// TODO: Create a function to initialize app
function init() {
};

// Function call to initialize app
init();
*/