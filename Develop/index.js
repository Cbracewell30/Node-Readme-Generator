// TODO: Include packages needed for this application
const inquirer = require('inquirer');

// TODO: Create an array of questions for user input
const questions = [
    'What is your name?',
    'What is the name of your repository',
    'Please describe your project'
];

const [nameQues, repoNameQues, projDescQues] = questions



const promptUser = () => {
   return inquirer.prompt([
{
   name: 'Name (Required)',
   message: nameQues,
   validate: nameInput => {
       if(nameInput){
        console.log(nameInput)
           return true
           
       }
       else{
        console.log('Please enter your name!')
        return false
       }
   }
}
   ])
};

const projectPrompt = () => {
    return inquirer.prompt([
{
    name: 'Repository Name (Required)',
    message: repoNameQues,
    validate: repoNameInput => {
        if(repoNameInput){
            return true
        }
        else{
         console.log('Please enter your Repository name!')
         return false
        }
    }
},
  {  
    name: 'Repository Description(Required)',
    message: projDescQues,
    validate: descripInput => {
        if(descripInput){
            return true
        }
        else{
         console.log('Please enter your name!')
         return false
        }
    }

  }
  
])
};

const results = () => console.log(nameInput);

// TODO: Create a function to write README file
function writeToFile(fileName, data) { }

// TODO: Create a function to initialize app
function init() { }

// Function call to initialize app
init();
promptUser()
.then(projectPrompt)
