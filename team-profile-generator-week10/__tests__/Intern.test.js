const Intern = require("../lib/Intern.js");
const Employee = require("../lib/Employee.js");
jest.mock("../lib/Employee.js");

test("does engineer return required info?", () => {
  const intern = new Intern("aaron", "1", "me@gmail.com", "UoM");

  expect(intern.getName()).toEqual("aaron");
  expect(intern.getId()).toEqual("1");
  expect(intern.getEmail()).toEqual("me@gmail.com");
  expect(intern.getSchool()).toEqual("UoM");
  expect(intern.getRole()).toEqual("Intern");
});
