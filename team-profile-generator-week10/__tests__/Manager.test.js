const Manager = require("../lib/Manager");
const Employee = require("../lib/Employee.js");
jest.mock("../lib/Employee.js");

test("does manager return required info?", () => {
  const manager = new Manager("aaron", "1", "me@gmail.com", "7");

  expect(manager.getName()).toEqual("aaron");
  expect(manager.getId()).toEqual("1");
  expect(manager.getEmail()).toEqual("me@gmail.com");
  expect(manager.getOffice()).toEqual("7");
  expect(manager.getRole()).toEqual("Manager");
});
