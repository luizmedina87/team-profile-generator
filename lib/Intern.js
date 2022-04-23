const Employee = require('./Employee');

class Intern extends Employee {
    constructor() {
        this.school = "";
    }

    getSchool() {
        return "";
    }

    getRole() {
        return "Intern";
    }
}

module.exports = Intern;