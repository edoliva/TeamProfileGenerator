const Intern = require("../lib/Intern");

describe("Intern", () => {
    it("should return a name as a property", () => {
        const name = "John Doe";

        const intern = new Intern(name);

        expect(intern.name).toEqual(name);
    });

    it("should return an ID as a property", () => {
        const name = "John Doe";
        const ID = 1234;

        const intern = new Intern(name, ID);

        expect(intern.ID).toEqual(ID);
    });

    it("should return a name as a property", () => {
        const name = "John Doe";
        const ID = 1234;
        const email = "jdoe@gmail.com"

        const intern = new Intern(name, ID, email);

        expect(intern.email).toEqual(email);
    });

    it("should return a school as a property", () => {
        const name = "John Doe";
        const ID = 1234;
        const email = "jdoe@gmail.com"
        const school = "State"

        const intern = new Intern(name, ID, email, school);

        expect(intern.school).toEqual(school);
    });

    it("should return a class object instance", () => {    
        const intern = new Intern();

        expect(typeof intern).toBe("object");
        });
});