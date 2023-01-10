const Employee = require('../lib/employee')

describe("Employee", () => {
    describe("Initialization",() => {
        it("Create an employee object with a name, ID, and email if provided valid arguements", () => {
            const employee = new Employee("Joe", 1, "joe@email.com");

            expect(employee.getName()).toEqual("Joe");
            expect(employee.getID()).toEqual(1);
            expect(employee.getEmail()).toEqual("joe@email.com")
        });
    });
});