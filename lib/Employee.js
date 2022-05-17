class Employee {
    constructor(name, id, email) {
        if (typeof name !== 'string' || !name.trim().length) {
            throw new Error("Expected parameter 'name' to be a non-empty string")
        } else {
            this.name = name
        }

        this.id = id;
        this.email = email;
    }


    
}


module.exports = Employee;

// console.log(new Employee(' ', 1, 2))