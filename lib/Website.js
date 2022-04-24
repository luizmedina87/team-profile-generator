const fs = require("fs");

class Website {
  constructor(team) {
    this.fileName = "./dist/index.html";
    this.team = team;
  }

  generateCardsHtml() {
    let cardsHTML = "";
    for (let i = 0; i < this.team.length; i++) {
      let teamMember = this.team[i];
      let memberTitle = teamMember.constructor.name;
      switch (memberTitle) {
        case "Manager":
          cardsHTML += `
          <div class="col-3 mx-auto my-3">
            <div class="card border-primary">
              <div class="card-body">
                <h5 class="card-title text-primary">${teamMember.name}</h5>
                <h6 class="card-subtitle mb-2 text-muted"><i class="bi bi-briefcase"></i> ${memberTitle}</h6>
                <p class="card-text">ID: ${teamMember.id}</p>
                <p class="card-text">e-mail: <a href="mailto:${teamMember.email}">${teamMember.email}</a></p>
                <p class="card-text">Office Number: ${teamMember.officeNumber}</p>
              </div>
            </div>
          </div>`;
          break;
        case "Engineer":
          cardsHTML += `
          <div class="col-3 mx-auto my-3">
            <div class="card border-primary">
              <div class="card-body">
                <h5 class="card-title text-primary">${teamMember.name}</h5>
                <h6 class="card-subtitle mb-2 text-muted"><i class="bi bi-laptop"></i> ${memberTitle}</h6>
                <p class="card-text">ID: ${teamMember.id}</p>
                <p class="card-text">e-mail: <a href="mailto:${teamMember.email}">${teamMember.email}</a></p>
                <p class="card-text">Github: <a href="https://github.com/${teamMember.github}" target="_blank">${teamMember.github}</a></p>
              </div>
            </div>
          </div>`;
          break;
        case "Intern":
          cardsHTML += `
          <div class="col-3 mx-auto my-3">
            <div class="card border-primary">
              <div class="card-body">
                <h5 class="card-title text-primary">${teamMember.name}</h5>
                <h6 class="card-subtitle mb-2 text-muted"><i class="bi bi-pencil-square"></i> ${memberTitle}</h6>
                <p class="card-text">ID: ${teamMember.id}</p>
                <p class="card-text">e-mail: <a href="mailto:${teamMember.email}">${teamMember.email}</a></p>
                <p class="card-text">School: ${teamMember.school}</p>
              </div>
            </div>
          </div>`;
          break;
      }
    }
    return cardsHTML;
  }

  generateHtml() {
    return `
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <!-- Bootstrap CSS -->
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
        <!-- Boostrap icons -->
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.8.1/font/bootstrap-icons.css">
        <title>MyTeam</title>
      </head>
      <body>
        <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
          <a class="navbar-brand mx-auto">My Team</a>
        </nav>
        <div class="row">${this.generateCardsHtml()}
        </div>
      </body>
    </html>`;
  }

  saveHtmlFile() {
    fs.writeFile(this.fileName, this.generateHtml(), function (err) {
      if (err) throw err;
      console.log("Saved!");
    });
  }
}

module.exports = Website;
