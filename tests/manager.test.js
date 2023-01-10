const Manager = require('../lib/manager')

describe("Intern", () => {
    describe("Initialization",() => {
        it("Create an intern object with a name, ID, School, and email if provided valid arguements", () => {
            const manager = new Manager("Mikasa", 4, "mikasa@email.com", 4);

            expect(manager.getName()).toEqual("Mikasa");
            expect(manager.getID()).toEqual(4);
            expect(manager.getEmail()).toEqual("mikasa@email.com");
            expect(manager.getOffice()).toEqual(4);
        });
    });
});