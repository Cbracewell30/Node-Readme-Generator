// TODO: Include packages needed for this application
const inquirer = require('inquirer');

// TODO: Create an array of questions for user input
const questions = [
    'What is your name?',
    'What is the name of your repository',
    'Please describe your project',
    'What Technology did you use?'

];
// assigning the question in the array.
const [nameQues, repoNameQues, projDescQues, techQues] = questions


// Creating user info prompt
const promptUser = () => {
    // getting the inquerier functionality
    return inquirer.prompt([
        {
            // Question prompt info
            name: 'Name (Required)',
            message: nameQues,
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
            name: 'Repository Name (Required)',
            message: repoNameQues,
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
            name: 'Repository Description(Required)',
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
            type: 'checkbox',
            name: 'languages',
            message: techQues,
            choices: ['JavaScript', 'HTML', 'CSS', 'ES6', 'jQuery', 'Bootstrap', 'Node']
        }

    ])
};



// TODO: Create a function to write README file
function writeToFile(fileName, data) { }

// TODO: Create a function to initialize app
function init() {
    promptUser()
    .then(promptResponse => {
        console.log(promptResponse)
    })
}

// Function call to initialize app
init();




