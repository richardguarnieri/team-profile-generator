const Employee = require('../lib/Employee')

describe('Employee', () => {
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
                const err = new Error("Expected parameter 'name' to be a string");
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
                const err = new Error("Expected parameter 'id' to be a number");
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
                const email = 31
                // Act
                const employee = new Employee('richard', 31, '@example.com')
                // Assert
                expect(employee.email).toBe(email);
            });
            // Exception Test # 1
            it("Should throw an error if not provided a 'number' value", () => {
                // Arrange
                const cb = () => new Employee('richard', 31, '@example.com')
                const err = new Error("Expected parameter 'email' to be a number");
                // Assert
                expect(cb).toThrowError(err);
            });
            // Exception Test # 2
            it("Should throw an error if provided a negative 'number' value", () => {
                // Arrange
                const cb = () => new Employee('richard', 31, '@example.com')
                const err = new Error("Expected parameter 'age' to be a non-negative number");
                // Assert
                expect(cb).toThrowError(err);
            });
        });
    });
});