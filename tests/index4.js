const inquirer = require('inquirer')

inquirer
.prompt([
{
    type:"list",
    name:"role",
    message:"What type of team member would you like to add?",
    choices: ["Manager", "Engineer","Intern"]
},
{
    type:"input",
    name:"name",
    message:"What is this team member's name?",
},
{
    type:"input",
    name:"name",
    message:"What is this team member's ID?",
},
{
    type: 'confirm',
    name: 'askAgain',
    message: 'Do you want to add another employee? (just hit enter for YES)?',
    default: true,
},
])

function ask() {
    inquirer.prompt(questions).then((answers) => {
      output.push(answers.tvShow);
      if (answers.askAgain) {
        ask();
      } else {
        console.log('Your favorite TV Shows:', output.join(', '));
      }
    });
  }
  
  ask();