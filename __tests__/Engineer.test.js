const Engineer = require("../lib/Engineer");

test("Creates an Engineer object", () => {
  const engineer = new Engineer("John", 0, "johndoe@test.com", "johndoe");

  expect(engineer.getName()).toBe("John");
  expect(engineer.getId()).toBe(0);
  expect(engineer.getEmail()).toBe("johndoe@test.com");
  expect(engineer.getRole()).toBe("Engineer");
  expect(engineer.getGithub()).toBe("johndoe");
});
