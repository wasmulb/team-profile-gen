const Intern = require('../lib/intern')

describe("Intern", () => {
    describe("Initialization",() => {
        it("Create an intern object with a name, ID, School, and email if provided valid arguements", () => {
            const intern = new Intern("Timmy", 3, "timmy@email.com", "University of Washington");

            expect(intern.getName()).toEqual("Timmy");
            expect(intern.getID()).toEqual(3);
            expect(intern.getEmail()).toEqual("timmy@email.com")
            expect(intern.getSchool()).toEqual("University of Washington")
        });
    });
});