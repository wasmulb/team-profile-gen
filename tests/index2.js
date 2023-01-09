const inquirer = require('inquirer')
const output = [];

const employeeQuestions = [
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
        type:"list",
        name:"role",
        message:"What type of team member is this employee?",
        choices: ["Manager", "Engineer","Intern"]
    },
  ];

const manangerQuestions=[
    {
        type:"input",
        name:"officeNumber",
        message:"What is this mananger's office number",
    },
    {
        type: 'confirm',
        name: 'askAgain',
        message: 'Would you like to add another team member? (just hit enter for YES)',
        default: true,
    },
    ];

const engineerQuestions=[
    {
        type:"input",
        name:"repo",
        message:"What is this engineer's GitHub username?",
    },
    {
        type: 'confirm',
        name: 'askAgain',
        message: 'Would you like to add another team member? (just hit enter for YES)',
        default: true,
    },
];

const internQuestions=[
    {
        type:"input",
        name:"repo",
        message:"What school does this intern attend?",
    },
    {
        type: 'confirm',
        name: 'askAgain',
        message: 'Would you like to add another team member? (just hit enter for YES)',
        default: true,
    },
];
  
  function ask() {
    inquirer.prompt(employeeQuestions).then((answers) => {
      output.push(answers.tvShow);
      if (answers.role === "Manager"){
        askManager();
      } else if(answers.role === "Engineer"){
        askEngineer();
      } else if(answers.role === "Intern"){
        askIntern();
      }
    });
  }

  function askManager(){
    inquirer.prompt(manangerQuestions).then((answers) => {
        output.push(answers.manager);
        if (answers.askAgain) {
            ask();
        } else {
            console.log(answers)
        }
    });
  }

  function askEngineer(){
    inquirer.prompt(engineerQuestions).then((answers) => {
        output.push(answers.engineer);
        if (answers.askAgain) {
            ask();
        } else {
            console.log(answers)
        }
    });
  }

  function askIntern(){
    inquirer.prompt(internQuestions).then((answers) => {
        output.push(answers.manager);
        if (answers.askAgain) {
            ask();
        } else {
            console.log(answers)
        }
    });
  }
  
  ask();