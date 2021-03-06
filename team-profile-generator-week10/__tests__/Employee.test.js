const Employee = require("../lib/Employee.js");

test("does the employee class return the required info?", () => {
  const employee = new Employee("aaron", "1", "me.google");

  expect(employee.getName()).toEqual(expect.any(String));
  expect(employee.getId()).toEqual(expect.any(String));
  expect(employee.getEmail()).toEqual(expect.any(String));
  expect(employee.getRole()).toEqual(expect.any(String));
});
