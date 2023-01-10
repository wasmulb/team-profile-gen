function htmlGen(team) {
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
        </section>`;
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
        </section>`;
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
        </section>`;
    }
    console.log(team.length);
    console.log("Hello", team);
    const html = [];
    html.push(
      team
        .filter((employee) => employee.getRole() === "Manager")
        .map((manager) => renderManager(manager))
    );
    html.push(
      team
        .filter((employee) => employee.getRole() === "Engineer")
        .map((engineer) => renderEngineer(engineer))
        .join("")
    );
    html.push(
      team
        .filter((employee) => employee.getRole() === "Intern")
        .map((intern) => renderIntern(intern))
        .join("")
    );
    return html.join("");
  }
  
  module.exports = (team) => {
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
  </html>`;
  };