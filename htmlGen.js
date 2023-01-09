function htmlGen(team) {
    console.log("Hello", team)
    for (let i = 0; i < team.length; i++) {
        console.log(team[i].getRole());
        if (team[i].getRole() === "Manager") {
            renderManager(team[i])
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