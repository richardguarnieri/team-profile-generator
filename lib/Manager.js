const Employee = require('./Employee')

class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
        super(name, id, email)

        // 'officeNumber' validation
        if (typeof officeNumber !== 'string' || !officeNumber.trim().length) {
            throw new Error("Expected parameter 'officeNumber' to be a non-empty string")
        }

        this.officeNumber = officeNumber
    }

    getRole() {
        return 'Manager'
    }
}

module.exports = Manager;