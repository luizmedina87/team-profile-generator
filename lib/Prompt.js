const Engineer = require("./Engineer.js");
const Intern = require("./Intern.js");
const Manager = require("./Manager.js");
const Website = require("./Website.js");

const inquirer = require("inquirer");

class Prompt {
  constructor() {
    this.isManager = true;
    this.employees = [];
  }

  promptUser() {
    console.log(this.employees);
    // the first user must be the manager
    if (this.isManager) {
      this.getManagerData();
    }
    // after inputing the manager, the user can choose to add more pople
    // or to finish inputing people, so the HTML can be generated.
    else {
      this.getUserChoice();
    }
  }

  getManagerData() {
    inquirer
      .prompt([
        {
          type: "input",
          name: "name",
          message: "Input the manager's name.",
          validate: (nameInput) => {
            return Boolean(nameInput);
          },
        },
        {
          type: "input",
          name: "id",
          message: "Input the manager's ID number.",
          validate: (idInput) => {
            return Boolean(idInput);
          },
        },
        {
          type: "input",
          name: "email",
          message: "Input the manager's email.",
          validate: (emailInput) => {
            return Boolean(emailInput);
          },
        },
        {
          type: "input",
          name: "office",
          message: "Input the manager's office number.",
          validate: (officeInput) => {
            return Boolean(officeInput);
          },
        },
      ])
      .then((answers) => {
        const { name, id, email, office } = answers;
        const manager = new Manager(name, id, email, office);
        this.employees.push(manager);
        // there can only be one manager
        this.isManager = false;
        // send the user to the menu
        this.promptUser();
      })
      .catch((error) => {
        console.log(error);
      });
  }

  getUserChoice() {
    inquirer
      .prompt([
        {
          type: "list",
          name: "choice",
          message: "What would you like to do next?",
          choices: [
            "Add a new Engineer to the team",
            "Add a new Intern to the team",
            "Generate HTML",
          ],
        },
      ])
      .then((answers) => {
        let userChoice = answers.choice;
        switch (userChoice) {
          case "Add a new Engineer to the team":
            this.getEngineerData();
            break;
          case "Add a new Intern to the team":
            this.getInternData();
            break;
          case "Generate HTML":
            this.generateHTML();
            break;
        }
      });
  }

  getEngineerData() {
    inquirer
      .prompt([
        {
          type: "input",
          name: "name",
          message: "Input the engineer's name.",
          validate: (nameInput) => {
            return Boolean(nameInput);
          },
        },
        {
          type: "input",
          name: "id",
          message: "Input the engineer's ID number.",
          validate: (idInput) => {
            return Boolean(idInput);
          },
        },
        {
          type: "input",
          name: "email",
          message: "Input the engineer's email.",
          validate: (emailInput) => {
            return Boolean(emailInput);
          },
        },
        {
          type: "input",
          name: "github",
          message: "Input the engineer's github username.",
          validate: (githubInput) => {
            return Boolean(githubInput);
          },
        },
      ])
      .then((answers) => {
        const { name, id, email, github } = answers;
        const engineer = new Engineer(name, id, email, github);
        this.employees.push(engineer);
        // send the user to the menu
        this.promptUser();
      })
      .catch((error) => {
        console.log(error);
      });
  }

  getInternData() {
    inquirer
      .prompt([
        {
          type: "input",
          name: "name",
          message: "Input the intern's name.",
          validate: (nameInput) => {
            return Boolean(nameInput);
          },
        },
        {
          type: "input",
          name: "id",
          message: "Input the intern's ID number.",
          validate: (idInput) => {
            return Boolean(idInput);
          },
        },
        {
          type: "input",
          name: "email",
          message: "Input the intern's email.",
          validate: (emailInput) => {
            return Boolean(emailInput);
          },
        },
        {
          type: "input",
          name: "school",
          message: "Input the intern's school.",
          validate: (schoolInput) => {
            return Boolean(schoolInput);
          },
        },
      ])
      .then((answers) => {
        const { name, id, email, school } = answers;
        const intern = new Intern(name, id, email, school);
        this.employees.push(intern);
        // send the user to the menu
        this.promptUser();
      })
      .catch((error) => {
        console.log(error);
      });
  }

  generateHTML() {
    console.log("gen new html");
  }
}

module.exports = Prompt;
