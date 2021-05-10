const Manager = require("../lib/Manager");

describe("Manager", () => {
    it("should return a name as a property", () => {
        const name = "John Doe";

        const manager = new Manager(name);

        expect(manager.name).toEqual(name);
    });

    it("should return an ID as a property", () => {
        const name = "John Doe";
        const ID = 1234;

        const manager = new Manager(name, ID);

        expect(manager.ID).toEqual(ID);
    });

    it("should return an email as a property", () => {
        const name = "John Doe";
        const ID = 1234;
        const email = "jdoe@gmail.com"

        const manager = new Manager(name, ID, email);

        expect(manager.email).toEqual(email);
    });

    it("should return an office number as a property", () => {
        const name = "John Doe";
        const ID = 1234;
        const email = "jdoe@gmail.com"
        const officeNum = 1921

        const manager = new Manager(name, ID, email, officeNum);

        expect(manager.officeNum).toEqual(officeNum);
    });

    it("should return a class object instance", () => {    
        const manager = new Manager();
        
        expect(typeof manager).toBe("object");
        });
});