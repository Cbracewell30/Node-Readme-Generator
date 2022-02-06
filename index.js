// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generatePage = require('./src/page-template');


// TODO: Create an array of questions for user input
const questions = [
    'What is your Project title?',
    'Please enter Github username?',
    'Please describe your project!',
    "Please choose the license for your project",
    'What Technology did you use?',
    'What are the installation instructions?',
    'What is the usage information?',
    'Who are the contributors to the project?',
    'What are the test intructions?',
    "Email address"
];
// assigning the question in the array.
const [titleQues, 
    userNameQues,
    projDescQues,
    licensQues,
    techQues,
    installationQues,
    usageQues,
    contribQues,
    testQuest,
    emailQues,
    ] = questions


// Creating user info prompt
const promptUser = projectData => {
    // getting the inquerier functionality
    return inquirer.prompt([
        {
            // Question prompt info
            name: 'title',
            message: titleQues,
            validate: nameInput => {
                // validating that the question was answered.
                if (nameInput) {

                    return true

                }
                else {
                    // if the question wasn't answered log the message
                    console.log('Please enter your name!')
                    return false
                }
            }
        },
        {
            name: 'Repository',
            message: userNameQues,
            validate: repoNameInput => {
                if (repoNameInput) {
                    return true
                }
                else {
                    return false
                }
            }
        },
        {
            name: 'Description',
            message: projDescQues,
            validate: descripInput => {
                if (descripInput) {
                    return true
                }
                else {
                    console.log('Please enter your name!')
                    return false
                }
            }

        },
        {
            type:'list',
            name:'License',
            message:licensQues,
            choices: ['MIT', 'GPL', 'ISC', 'APACHE 2.0']
        },
        {
            name: 'Installation',
            message: installationQues,
            validate: installInput => {
                if (installInput) {
                    return true
                }
                else {
                    console.log('Please enter the installation instructions!')
                    return false
                }
            }

        },
        {
            name: 'Usage',
            message: usageQues,
            validate: usageInput => {
                if (usageInput) {
                    return true
                }
                else {
                    console.log('Please enter the usage information!')
                    return false
                }
            }
        },
        {
            name: 'Contributors',
            message: contribQues,
            validate: contribInput => {
                if (contribInput) {
                    return true
                }
                else {
                    console.log('Please enter the contribution guidelines!')
                    return false
                }
            }
        },
        {
            name: 'Test',
            message: testQuest,
            validate: testInput => {
                if (testInput) {
                    return true
                }
                else {
                    console.log('Please enter the test instructions!')
                    return false
                }
            }
        },
        {
            type: 'checkbox',
            name: 'languages',
            message: techQues,
            choices: ['JavaScript', 'HTML', 'CSS', 'ES6', 'jQuery', 'Bootstrap', 'Node']
        },
        {
            name:'Email',
            message: emailQues,
            validate: emailInput => {
                if (emailInput) {
                    return true
                }
                else {
                    console.log('Please enter a valid email address !')
                    return false
                }
            }
        }

    ])
};



// TODO: Create a function to write README file
function writeToFile(fileName, data) { }

// TODO: Create a function to initialize app
function init() {
    promptUser()
    .then(portfolioData => {
        return generatePage(portfolioData);
    })
};
// Function call to initialize app
init();




