const Employee = require('../lib/Employee')
const Intern = require('../lib/Intern')

describe('Intern', () => {
    // Constructor Test
    describe('Initialization', () => {
        describe('Extends Employee', () => {
            // Positive Test
            it("Should extend the Employee class", () => {
                // Arrange
                const intern = new Intern('richard', 31, '@example.com', 'hogwarts')
                // Assert
                expect(intern).toBeInstanceOf(Employee);
            });
        });
        describe('school', () => {
            // Positive Test
            it("Should create an object with a 'school' property set to the 'school' argument provided when called with the 'new' keyword", () => {
                // Arrange
                const school = 'hogwarts'
                // Act
                const intern = new Intern('richard', 31, '@example.com', 'hogwarts')
                // Assert
                expect(intern.school).toBe(school);
            });
            // Exception Test # 1
            it("Should throw an error if not provided a 'string' value", () => {
                // Arrange
                const cb = () => new Intern('richard', 31, '@example.com', 1)
                const err = new Error("Expected parameter 'school' to be a non-empty string");
                // Assert
                expect(cb).toThrowError(err);
            });
            // Exception Test # 2
            it("Should throw an error if provided an empty 'string' value", () => {
                // Arrange
                const cb = () => new Intern('richard', 31, '@example.com', ' ')
                const err = new Error("Expected parameter 'school' to be a non-empty string");
                // Assert
                expect(cb).toThrowError(err);
            });
        });
    });
    
    // Methods Test
    describe('Methods', () => {
        describe('getSchool', () => {
            // Positive Test
            it('Should return the "school" of the object\'s instance', () => {
                // Arrange
                const school = 'hogwarts';
                // Act
                const intern = new Intern('richard', 31, '@example.com', 'hogwarts');
                const internSchool = intern.getSchool();
                // Assert
                expect(internSchool).toBe(school);
            });
        })
        describe('getRole', () => {
            // Positive Test
            it("Should return 'Intern'", () => {
                // Arrange
                const role = 'Intern';
                // Act
                const intern = new Intern('richard', 31, '@example.com', 'hogwarts');
                const internRole = intern.getRole();
                // Assert
                expect(internRole).toBe(role);
            });
        })
    })
});