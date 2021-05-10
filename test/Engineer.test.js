const Engineer = require("../lib/Engineer");

describe("Engineer", () => {
    it("should return a name as a property", () => {
        const name = "John Doe";

        const engineer = new Engineer(name);

        expect(engineer.name).toEqual(name);
    });

    it("should return an ID as a property", () => {
        const name = "John Doe";
        const ID = 1234;

        const engineer = new Engineer(name, ID);

        expect(engineer.ID).toEqual(ID);
    });

    it("should return a name as a property", () => {
        const name = "John Doe";
        const ID = 1234;
        const email = "jdoe@gmail.com"
        
        const engineer = new Engineer(name, ID, email);

        expect(engineer.email).toEqual(email);
    });

    it("should return a GitHub username as a property", () => {
        const name = "John Doe";
        const ID = 1234;
        const email = "jdoe@gmail.com"
        const ghUsername = "State"

        const engineer = new Engineer(name, ID, email, ghUsername);

        expect(engineer.ghUsername).toEqual(ghUsername);
    });

    it("should return a class object instance", () => {    
        const engineer = new Engineer();
        
        expect(typeof engineer).toBe("object");
        });
});