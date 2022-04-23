const Manager = require("../lib/Manager");

test("Creates a Manager object", () => {
  const manager = new Manager("John", "0", "johndoe@test.com", "0");
  
  expect(manager.getName()).toBe("John");
  expect(manager.getId()).toBe("0");
  expect(manager.getEmail()).toBe("johndoe@test.com");
  expect(manager.getRole()).toBe("Manager");
  expect(manager.officeNumber).toBe("0");
});
