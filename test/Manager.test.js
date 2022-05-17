const Manager = require('../lib/Manager')

describe('Manager', () => {
    // Constructor Test
    describe('Initialization', () => {
        describe('Extends Employee', () => {
            // Positive Test
            it("Should extend the Employee class", () => {
                // Arrange
                const manager = new Manager('richard', 31, '@example.com', '5511119999')
                // Assert
                expect(manager).toBeInstanceOf(Employee);
            });
        });
        describe('officeNumber', () => {
            // Positive Test
            it("Should create an object with a 'officeNumber' property set to the 'officeNumber' argument provided when called with the 'new' keyword", () => {
                // Arrange
                const officeNumber = '5511119999'
                // Act
                const manager = new Manager('richard', 31, '@example.com', '5511119999')
                // Assert
                expect(manager.officeNumber).toBe(officeNumber);
            });
            // Exception Test # 1
            it("Should throw an error if not provided a 'string' value", () => {
                // Arrange
                const cb = () => new Manager('richard', 31, '@example.com', 1)
                const err = new Error("Expected parameter 'officeNumber' to be a non-empty string");
                // Assert
                expect(cb).toThrowError(err);
            });
            // Exception Test # 2
            it("Should throw an error if provided an empty 'string' value", () => {
                // Arrange
                const cb = () => new Employee('richard', 31, '@example.com', ' ')
                const err = new Error("Expected parameter 'officeNumber' to be a non-empty string");
                // Assert
                expect(cb).toThrowError(err);
            });
        });
    });
    
    // Methods Test
    describe('Methods', () => {
        describe('getRole', () => {
            // Positive Test
            it("Should return 'Manager'", () => {
                // Arrange
                const role = 'Manager';
                // Act
                const manager = new Manager('richard', 31, '@example.com', '5511119999');
                const managerRole = manager.getRole();
                // Assert
                expect(managerRole).toBe(role);
            });
        })
    })
});