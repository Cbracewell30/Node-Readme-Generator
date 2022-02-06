const fs = require('fs');

module.exports = promptResponse => {
    console.log(promptResponse)
    var readmeTEXT = `
# ${promptResponse.title}   ![GitHub license](https://img.shields.io/badge/license-${promptResponse.License}-blue.svg)

## Description
${promptResponse.Description}

### Table Of Contents
* [License](#license)
* [Github](#github)
* [Installation](#installation)
* [Usage](#usage)
* [Contributors](#contributors)
* [Test](#test)
* [Languages](#languages)
* [Email](#Email)
  

#### License
![GitHub license](https://img.shields.io/badge/license-${promptResponse.License}-blue.svg)

#### Installation
${promptResponse.Installation}

#### Usage 
${promptResponse.Usage}

#### Contributors
${promptResponse.Contributors}

#### Test
${promptResponse.Test}

#### Languages

Langues used in this project include ${promptResponse.languages}

                                 ##Questions
#### Github
[Check out my github](https://github.com/${promptResponse.Repository})

#### Email
Feel free to reach me at ${promptResponse.Email} for any questions regarding this project.

`
console.log(readmeTEXT)
fs.writeFileSync("./testfile/README.md",readmeTEXT,function(err){
if(err) throw err;
console.log("- File Generated --")
})

};

