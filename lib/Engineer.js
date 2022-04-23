const Employee = require("./Employee");

class Engineer extends Employee {
    constructor() {
        this.github = "";
    }

    getGithub() {
        return "";
    }

    getRole() {
        return "Engineer";
    }
}

module.exports = Engineer;