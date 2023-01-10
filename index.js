const inquirer = require('inquirer');
const Manager = require('./lib/manager');
const Engineer = require('./lib/engineer');
const Intern = require('./lib/intern');
const fs = require('fs');
const htmlGen = require('./htmlGen')
const output = [];

const employeeQuestions = [
    {
        type:"list",
        name:"role",
        message:"What type of team member would you like to add?",
        choices: ["Manager", "Engineer","Intern", "No more team members (Generate web page)"]
    },
  ];

const manangerQuestions=[
    {
        type:"input",
        name:"name",
        message:"What is this team member's name?",
    },
    {
        type:"input",
        name:"employeeID",
        message:"What is this team member's ID?",
    },
    {
        type:"input",
        name:"emailAdress",
        message:"What is this team member's email adress?"
    },
    {
        type:"input",
        name:"officeNumber",
        message:"What is this mananger's office number",
    },
    {
        type: 'confirm',
        name: 'askAgain',
        message: `Press 'Enter' to return to the selection menu.`,
        default: true,
    },
    ];

const engineerQuestions=[
    {
        type:"input",
        name:"name",
        message:"What is this team member's name?",
    },
    {
        type:"input",
        name:"employeeID",
        message:"What is this team member's ID?",
    },
    {
        type:"input",
        name:"emailAdress",
        message:"What is this team member's email adress?"
    },
    {
        type:"input",
        name:"repo",
        message:"What is this engineer's GitHub username?",
    },
    {
        type: 'confirm',
        name: 'askAgain',
        message: `Press 'Enter' to return to the selection menu.`,
        default: true,
    },
];

const internQuestions=[
    {
        type:"input",
        name:"name",
        message:"What is this team member's name?",
    },
    {
        type:"input",
        name:"employeeID",
        message:"What is this team member's ID?",
    },
    {
        type:"input",
        name:"emailAdress",
        message:"What is this team member's email adress?"
    },
    {
        type:"input",
        name:"school",
        message:"What school does this intern attend?",
    },
    {
        type: 'confirm',
        name: 'askAgain',
        message: `Press 'Enter' to return to the selection menu.`,
        default: true,
    },
];
  
  function ask() {
    inquirer.prompt(employeeQuestions).then((answers) => {
      if (answers.role === "Manager"){
        askManager();
      } else if(answers.role === "Engineer"){
        askEngineer();
      } else if(answers.role === "Intern"){
        askIntern();
      } else{
        generate()
      }
    });
  }

  function askManager(){
    inquirer.prompt(manangerQuestions).then((answers) => {
        const newManager = new Manager(answers.name, answers.employeeID,answers.emailAdress,answers.officeNumber)
        output.push(newManager);
        if (answers.askAgain) {
            ask();
        } else {
            // console.log(output)
        }
    });
  }

  function askEngineer(){
    inquirer.prompt(engineerQuestions).then((answers) => {
        const newEngineer = new Engineer(answers.name, answers.employeeID,answers.emailAdress,answers.repo)
        output.push(newEngineer);
        if (answers.askAgain) {
            ask();
        } else {
            // console.log(output)
        }
    });
  }

  function askIntern(){
    inquirer.prompt(internQuestions).then((answers) => {
        const newIntern = new Intern(answers.name, answers.employeeID,answers.emailAdress,answers.school)
        output.push(newIntern);
        if (answers.askAgain) {
            ask();
        } else {
            // console.log(output)
        }
    });
  }

  function generate(){
    fs.writeFileSync('./dist/index.html',htmlGen(output))
  }
  
  ask();