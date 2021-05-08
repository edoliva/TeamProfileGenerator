const Employee = require("./Employee");

class Intern extends Employee {
    constructor (name, ID, email, school) {
        super(name, ID, email);
        this.school = school;
    }
getSchool(){
    return this.school;
}
getRole() {
    return 'Intern';
}

}

// const Jon = new Manager("Jon", 1234, "jon@email.org", 12);
// console.log(Jon, Jon.getName());

module.exports = Intern; 