const Employee = require("../lib/Employee");

test("Creates an Employee object", () => {
  const employee = new Employee("John", "0", "johndoe@test.com");

  expect(employee.getName()).toBe("John");
  expect(employee.getId()).toBe("0");
  expect(employee.getEmail()).toBe("johndoe@test.com");
  expect(employee.getRole()).toBe("Employee");
});
