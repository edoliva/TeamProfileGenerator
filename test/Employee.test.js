const Employee = require("../lib/Employee");

describe("Employee", () => {
    it("should return a name as a property", () => {
        const name = "John Doe";

        const employee = new Employee(name);

        expect(employee.name).toEqual(name);
    });

    it("should return a name as a property", () => {
        const name = "John Doe";
        const ID = 1234;

        const employee = new Employee(name, ID);

        expect(employee.ID).toEqual(ID);
    });

    it("should return a name as a property", () => {
        const name = "John Doe";
        const ID = 1234;
        const email = "jdoe@gmail.com"

        const employee = new Employee(name, ID, email);

        expect(employee.email).toEqual(email);
    });

    it("should return a class object instance", () => {    
        const employee = new Employee();
        
        expect(typeof employee).toBe("object");
        });
});