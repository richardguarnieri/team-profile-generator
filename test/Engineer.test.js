const Employee = require('../lib/Employee')
const Engineer = require('../lib/Engineer')

describe('Engineer', () => {
    // Constructor Test
    describe('Initialization', () => {
        describe('Extends Employee', () => {
            // Positive Test
            it("Should extend the Employee class", () => {
                // Arrange
                const engineer = new Engineer('richard', 31, '@example.com', 'richardguarnieri')
                // Assert
                expect(engineer).toBeInstanceOf(Employee);
            });
        });
        describe('github', () => {
            // Positive Test
            it("Should create an object with a 'github' property set to the 'github' argument provided when called with the 'new' keyword", () => {
                // Arrange
                const github = 'richardguarnieri'
                // Act
                const engineer = new Engineer('richard', 31, '@example.com', 'richardguarnieri')
                // Assert
                expect(engineer.github).toBe(github);
            });
            // Exception Test # 1
            it("Should throw an error if not provided a 'string' value", () => {
                // Arrange
                const cb = () => new Engineer('richard', 31, '@example.com', 1)
                const err = new Error("Expected parameter 'github' to be a non-empty string");
                // Assert
                expect(cb).toThrowError(err);
            });
            // Exception Test # 2
            it("Should throw an error if provided an empty 'string' value", () => {
                // Arrange
                const cb = () => new Engineer('richard', 31, '@example.com', ' ')
                const err = new Error("Expected parameter 'github' to be a non-empty string");
                // Assert
                expect(cb).toThrowError(err);
            });
        });
    });
    
    // Methods Test
    describe('Methods', () => {
        describe('getGithub', () => {
            // Positive Test
            it('Should return the "github" of the object\'s instance', () => {
                // Arrange
                const github = 'richardguarnieri';
                // Act
                const engineer = new Engineer('richard', 31, '@example.com', 'richardguarnieri');
                const engineerGithub = engineer.getGithub();
                // Assert
                expect(engineerGithub).toBe(github);
            });
        })
        describe('getRole', () => {
            // Positive Test
            it("Should return 'Engineer'", () => {
                // Arrange
                const role = 'Engineer';
                // Act
                const engineer = new Engineer('richard', 31, '@example.com', 'richardguarnieri');
                const engineerRole = engineer.getRole();
                // Assert
                expect(engineerRole).toBe(role);
            });
        })
    })
});