const Employee = require("./Employee");

class Engineer extends Employee {
    constructor (name, ID, email, ghUsername) {
        super(name, ID, email);
        this.ghUsername = ghUsername;
    }
getGitHubUsername(){
    return this.ghUsername;
}
getRole() {
    return 'Engineer';
}

}

// const Jon = new Manager("Jon", 1234, "jon@email.org", 12);
// console.log(Jon, Jon.getName());

module.exports = Engineer; 