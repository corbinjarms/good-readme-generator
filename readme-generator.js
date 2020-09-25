
var inquirer = require('inquirer');
fs = require('fs');

console.log('I will now generate you a readme for your project');

var questions = [
  {
    type: 'input',
    name: 'title',
    message: 'What is your project title? ',
    default: 'MyProject',
  },
  
  {
    type: 'input',
    name: 'description',
    message: 'Enter a description: ',
    default: '',
  },
  
  {
    type: 'input',
    name: 'installationInstructions',
    message: 'Enter installation instructions: ',
    default: '',
  },
  
  {
    type: 'input',
    name: 'usageInformation',
    message: 'Enter usage information: ',
    default: '',
  },
  {
    type: 'input',
    name: 'testInstructions',
    message: 'Enter test instructions : ',
    default: '',
  },
  {
    type: 'input',
    name: 'contributionGuidelines',
    message: 'Enter contribution guidelines: ',
    default: '',
  },
  {
    type: 'input',
    name: 'username',
    message: 'Enter Github username ',
    default: '',
  },
  {
    type: 'list',
    name: 'license',
    message: 'Select a license: ',
    choices: ['MIT', 'GPL', 'Apache' ],
  },
  {
    type: 'input',
    name: 'email',
    message: 'Enter email address ',
    default: '',
  },
  
];


inquirer.prompt(questions).then((answers) => {
  console.log("Title is: " + answers.title)



  fs.writeFile('readme.md', 

  "![MIT licensed](https://img.shields.io/badge/license-"+answers.license+"-blue"+")"
  + "\n# "+ "Table of Contents"
  + "\n## "+ "* [Installation](#installation-instructions)"
  + "\n## "+ "* [Usage](#usage-information)"
  + "\n## "+ "* [Test](#test-instructions)"
  + "\n## "+ "* [Contribution](#contribution-guidelines)"
  + "\n## "+ "* [Questions](#Questions?)"
  + "\n# "+ answers.title + "\n##### " + answers.description 
  + "\n## " + "Installation Instructions" + "\n##### " + answers.installationInstructions 
  + "\n## " + "Usage Information" + "\n##### " + answers.usageInformation
  + "\n## " + "Test Instructions" + "\n##### " + answers.testInstructions
  + "\n## " + "Contribution Guidelines" + "\n##### " + answers.contributionGuidelines
  + "\n# " + "Questions?" 
  + "\n## " +  "Username" + "\n##### " + answers.username
  + "\n## " +  "Contact Information" + "\n##### " + answers.email,
  
  function (err) {
    if (err) return console.log(err);
  });

  console.log(JSON.stringify(answers, null, '  '));
});

