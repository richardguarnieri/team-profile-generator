const Employee = require('../lib/Employee')

describe('Employee', () => {
    describe('Initialization', () => {
        describe('Name', () => {
            // Positive Test
            it("Should create an object with a 'name' property set to the 'name' argument provided when called with the 'new' keyword", () => {
                // Arrange
                const employeeName = 'richard'
                // Act
                const employee = new Employee('richard', '1', '@example.com')
                // Assert
                expect(employee.name).toBe(employeeName);
            });
            // Exception Test # 1
            it("Should throw an error if not provided a 'string' value", () => {
                // Arrange
                const cbEmployeeNotString = () => new Employee(1, '1', '@example.com')
                const err = new Error("Expected parameter 'name' to be a non-empty string");
                // Assert
                expect(cbEmployeeNotString).toThrowError(err);
            });
            // Exception Test # 2
            it("Should throw an error if provided an empty 'string' value", () => {
                // Arrange
                const cbEmployeeEmpty = () => new Employee(' ', '1', '@example.com')
                const err = new Error("Expected parameter 'name' to be a non-empty string");
                // Assert
                expect(cbEmployeeEmpty).toThrowError(err);
            });
        });
    });
});