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
        });
    });
    
    // Methods Test



});