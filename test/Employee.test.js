const Employee = require('../lib/Employee')

describe('Employee', () => {
    // Constructor Test
    describe('Initialization', () => {
        describe('name', () => {
            // Positive Test
            it("Should create an object with a 'name' property set to the 'name' argument provided when called with the 'new' keyword", () => {
                // Arrange
                const name = 'richard'
                // Act
                const employee = new Employee('richard', 31, '@example.com')
                // Assert
                expect(employee.name).toBe(name);
            });
            // Exception Test # 1
            it("Should throw an error if not provided a 'string' value", () => {
                // Arrange
                const cb = () => new Employee(1, 31, '@example.com')
                const err = new Error("Expected parameter 'name' to be a non-empty string");
                // Assert
                expect(cb).toThrowError(err);
            });
            // Exception Test # 2
            it("Should throw an error if provided an empty 'string' value", () => {
                // Arrange
                const cb = () => new Employee(' ', 31, '@example.com')
                const err = new Error("Expected parameter 'name' to be a non-empty string");
                // Assert
                expect(cb).toThrowError(err);
            });
        });
        describe('id', () => {
            // Positive Test
            it("Should create an object with a 'id' property set to the 'id' argument provided when called with the 'new' keyword", () => {
                // Arrange
                const id = 31
                // Act
                const employee = new Employee('richard', 31, '@example.com')
                // Assert
                expect(employee.id).toBe(id);
            });
            // Exception Test # 1
            it("Should throw an error if not provided a 'number' value", () => {
                // Arrange
                const cb = () => new Employee('richard', '31', '@example.com')
                const err = new Error("Expected parameter 'age' to be a non-negative number");
                // Assert
                expect(cb).toThrowError(err);
            });
            // Exception Test # 2
            it("Should throw an error if provided a negative 'number' value", () => {
                // Arrange
                const cb = () => new Employee('richard', -31, '@example.com')
                const err = new Error("Expected parameter 'age' to be a non-negative number");
                // Assert
                expect(cb).toThrowError(err);
            });
        });
        describe('email', () => {
            // Positive Test
            it("Should create an object with a 'email' property set to the 'email' argument provided when called with the 'new' keyword", () => {
                // Arrange
                const email = '@example.com'
                // Act
                const employee = new Employee('richard', 31, '@example.com')
                // Assert
                expect(employee.email).toBe(email);
            });
            // // Exception Test # 1
            // it("Should throw an error if not provided a 'number' value", () => {
            //     // Arrange
            //     const cb = () => new Employee('richard', 31, '@example.com')
            //     const err = new Error("Expected parameter 'email' to be a number");
            //     // Assert
            //     expect(cb).toThrowError(err);
            // });
            // // Exception Test # 2
            // it("Should throw an error if provided a negative 'number' value", () => {
            //     // Arrange
            //     const cb = () => new Employee('richard', 31, '@example.com')
            //     const err = new Error("Expected parameter 'age' to be a non-negative number");
            //     // Assert
            //     expect(cb).toThrowError(err);
            // });
        });
    });
    
    // Methods Test
    describe('Methods', () => {
        describe('getName', () => {
            // Positive Test
            it('Should return the name of the object\'s instance', () => {
                // Arrange
                const name = 'richard';
                // Act
                const employee = new Employee('richard', 31, '@example.com');
                const employeeName = employee.getName();
                // Assert
                expect(employeeName).toBe(name);
            });
        })
        describe('getId', () => {
            // Positive Test
            it('Should return the id of the object\'s instance', () => {
                // Arrange
                const id = 31;
                // Act
                const employee = new Employee('richard', 31, '@example.com');
                const employeeId = employee.getId();
                // Assert
                expect(employeeId).toBe(id);
            });
        })
        describe('getEmail', () => {
            // Positive Test
            it('Should return the email of the object\'s instance', () => {
                // Arrange
                const email = '@example.com';
                // Act
                const employee = new Employee('richard', 31, '@example.com');
                const employeeEmail = employee.getEmail();
                // Assert
                expect(employeeEmail).toBe(email);
            });
        })
        describe('getRole', () => {
            // Positive Test
            it("Should return 'Employee'", () => {
                // Arrange
                const role = 'Employee';
                // Act
                const employee = new Employee('richard', 31, '@example.com');
                const employeeRole = employee.getRole();
                // Assert
                expect(employeeRole).toBe(role);
            });
        })
    })






});