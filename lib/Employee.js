class Employee {
    constructor (name, ID, email) {
        this.name = name;
        this.ID = ID;
        this.email = email;
    }
getName(){
    return this.name;
}
getID(){
    return this.ID;
}
getEmail(){
    return this.email;
}
}

// const Jon = new Employee("Jon", 1234, "jon@email.org");
// console.log(Jon.getName());



module.exports = Employee;  