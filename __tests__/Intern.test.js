const Intern = require("../lib/Intern");

test("Creates an Intern object", () => {
  const intern = new Intern("John", "0", "johndoe@test.com", "Hogwarts");

  expect(intern.getName()).toBe("John");
  expect(intern.getId()).toBe("0");
  expect(intern.getEmail()).toBe("johndoe@test.com");
  expect(intern.getRole()).toBe("Intern");
  expect(intern.getSchool()).toBe("Hogwarts");
});
