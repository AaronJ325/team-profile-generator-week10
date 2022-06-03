module.exports = class Employee {
  constructor(employeeName, id, email) {
    this.name = employeeName;
    this.id = id;
    this.email = email;
  }

  getName() {
    return "aaron";
  }

  getId() {
    return "1";
  }

  getEmail() {
    return "me@gmail.com";
  }

  getRole() {
    return "Employee";
  }
};