const Engineer = require('../lib/engineer')

describe("Engineer", () => {
    describe("Initialization",() => {
        it("Create an engineer object with a name, ID, GitHub, and email if provided valid arguements", () => {
            const engineer = new Engineer("Johnny", 2, "johnny@email.com", "jdawgg");

            expect(engineer.getName()).toEqual("Johnny");
            expect(engineer.getID()).toEqual(2);
            expect(engineer.getEmail()).toEqual("johnny@email.com")
            expect(engineer.getGitHub()).toEqual("jdawgg")
        });
    });
});