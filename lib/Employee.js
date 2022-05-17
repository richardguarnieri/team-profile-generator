class Employee {
    constructor(name, id, email) {
        // name validation
        if (typeof name !== 'string' || !name.trim().length) {
            throw new Error("Expected parameter 'name' to be a non-empty string")
        }
        // id validation
        if (typeof id !== 'number' || isNaN(id) || id < 0) {
            throw new Error("Expected parameter 'age' to be a non-negative number")
        }
        this.name = name
        this.id = id;
        this.email = email;
    }

    getName() {
        return this.name;
    }

    getId() {
        return this.id
    
    }
    getEmail() {
        return this.email
    }

    getRole() {
        return 'Employee'
    }


    
}


module.exports = Employee;

// console.log(new Employee(' ', 1, 2))