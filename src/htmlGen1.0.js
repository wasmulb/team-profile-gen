function htmlGen(team) {
    console.log(team.length)
    console.log("Hello", team)
    for (let i = 0; i < team.length; i++) {
        // console.log(team[i].getRole());
        if (team[i].getRole() === "Manager") {
            return(renderManager(team[i]));
        }
        else if(team[i].getRole() === "Engineer") {
            return(renderEngineer(team[i]));
        }
        else if(team[i].getRole() === "Intern"){
            return(renderIntern(team[i]));
        }
    }

    }

function renderManager(manager) {
    return `        <section class="employee-card">
<div class="title">
    <ul>
        <li>${manager.getName()}</li>
        <li>Mananger</li>
    </ul>
</div>
<div class="info">
    <div>ID: ${manager.getID()}</div>
    <div>Email: ${manager.getEmail()}</div>
    <div>Office Number: ${manager.getOffice()}</div>
</div>
</section>`
}

function renderEngineer(engineer) {
    return `<section class="employee-card">
    <div class="title">
        <ul>
            <li>${engineer.getName()}</li>
            <li>Engineer</li>
        </ul>
    </div>
    <div class="info">
        <div>ID:${engineer.getID()}</div>
        <div>Email:${engineer.getEmail()}</div>
        <div>GitHub:${engineer.getGitHub()}</div>
    </div>
</section>`
}

function renderIntern(intern) {
    return `<section class="employee-card">
    <div class="title">
        <ul>
            <li>${intern.getName()}</li>
            <li>Intern</li>
        </ul>
    </div>
    <div class="info">
        <div>ID:${intern.getID()}</div>
        <div>Email:${intern.getEmail()}</div>
        <div>GitHub:${intern.getSchool()}</div>
    </div>
</section>`
}

module.exports = team => {
    return `
    <!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <link rel="stylesheet" href="./style.css" />
    <title>Team Profile</title>
  </head>

  <body>
    <header>
        <h1>My Team</h1>
    </header>
    <main>
    ${htmlGen(team)}
    </main>
  </body>
</html>
    `
}