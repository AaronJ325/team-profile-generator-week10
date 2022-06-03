const Engineer = require("../lib/Engineer");
const Employee = require("../lib/Employee.js");
jest.mock("../lib/Employee.js");

test("does engineer return required info?", () => {
  const engineer = new Engineer("aaron", "1", "me@gmail.com", "myGithubUsername");

  expect(engineer.getName()).toEqual("aaron");
  expect(engineer.getId()).toEqual("1");
  expect(engineer.getEmail()).toEqual("me@gmail.com");
  expect(engineer.getGithub()).toEqual("myGithubUsername");
  expect(engineer.getRole()).toEqual("Engineer");
});
