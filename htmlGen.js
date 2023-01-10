function htmlGen(team) {
    function renderManager(manager) {
      return `        <section class="employee-card">
        <div class="title">
            <a>
                ${manager.getName()} - ${manager.getRole()}
            </a>
        </div>
        <div class="info">
            <a>ID: ${manager.getID()}</a>
            <a href="mailto: ${manager.getEmail()}">Email: ${manager.getEmail()}</a>
            <a>Office Number: ${manager.getOffice()}</a>
        </div>
        </section>`;
    }
  
    function renderEngineer(engineer) {
      return `<section class="employee-card">
            <div class="title">
                <a>
                    ${engineer.getName()} - ${engineer.getRole()}
                </a>
            </div>
            <div class="info">
                <a>ID:${engineer.getID()}</a>
                <a href="mailto: ${engineer.getEmail()}">Email: ${engineer.getEmail()}</a>
                <a target="_blank" href="https://github.com/${engineer.getGitHub()}">GitHub: ${engineer.getGitHub()}</a>
            </div>
        </section>`;
    }
  
    function renderIntern(intern) {
      return `<section class="employee-card">
            <div class="title">
                <a>
                    ${intern.getName()} - ${intern.getRole()}
                </a>
            </div>
            <div class="info">
                <a>ID: ${intern.getID()}</a>
                <a href="mailto: ${intern.getEmail()}">Email: ${intern.getEmail()}</a>
                <a>School: ${intern.getSchool()}</a>
            </div>
        </section>`;
    }
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