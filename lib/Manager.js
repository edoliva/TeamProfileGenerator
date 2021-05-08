const Employee = require("./Employee");

class Manager extends Employee {
    constructor (name, ID, email, officeNum) {
        super(name, ID, email);
        this.officeNum = officeNum;
    }
getofficeNum(){
    return this.officeNum;
}
getRole() {
    return 'Manager';
}

}

// const Jon = new Manager("Jon", 1234, "jon@email.org", 12);
// console.log(Jon, Jon.getName());

module.exports = Manager;  