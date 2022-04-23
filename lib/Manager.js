const Employee = require("./Employee");

class Manager extends Employee {
  constructor() {
    this.officeNumber = "";
  }

  getRole() {
    return "Manager";
  }
}

module.exports = Manager;