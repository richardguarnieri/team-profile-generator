// Import setTimeout from Node.js
const { setTimeout: setTimeoutPromise } = require('timers/promises');

// Import Inquirer NPM
const inquirer = require('inquirer');

// Import Classes
const Employee = require('./lib/Employee');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

const questions = [
    "Question #1 - Please enter the manager's name:",
    "Question #2 - Please enter the manager's employee id:",
    "Question #3 - Please enter the manager's email address:",
    "Question #4 - Please enter the manager's office number:",
    "Question #5 - Please continue building your team! Select either an Engineer or an Intern (or quit if you don't want to add anyone else!):",
    "6) TEXT - Please enter the engineer's name:",
    "7) TEXT - Please enter the engineer's employee id:",
    "8) TEXT - Please enter the engineer's email address:",
    "9) TEXT - Please enter the engineer's GitHub username:",
    "6) TEXT - Please enter the intern's name:",
    "7) TEXT - Please enter the intern's employee id:",
    "8) TEXT - Please enter the intern's email address:",
    "9) TEXT - Please enter the intern's school:",
]

const welcome = async () => {
    console.log('--------------------------------------------------')
    console.log('              Team Profile Generator              ')
    console.log('--------------------------------------------------')
    // await setTimeoutPromise(3_000);
    console.log("In this application you'll be able to create a HTML webpage that displays summaries for each team member.");
    // await setTimeoutPromise(5_000);
    console.log("You will first enter the manager's information (name, id, email and office number). Once this is done, you will be asked to input the rest of the team");
    // await setTimeoutPromise(8_000);
    console.log("Enjoy building the team!\n");
    // await setTimeoutPromise(5_000);
    console.log("Let's start with the manager...")
    // await setTimeoutPromise(3_000);
};

const choice = async () => {
    const choiceResult = await inquirer.prompt([
        {
            type: 'list',
            name: 'choice',
            message: questions[4],
            choices: [
                "Engineer",
                "Intern",
                "I'm done! don't want to add anyone else!"
            ],
            validate(answer) {
                if (!isNaN(Number(answer)) || answer.trim().length === 0) {
                    console.log('\nPlease enter a non-empty text')
                    return false
                } else {
                    return true
                }
            }
        },
    ])
    console.log(`\nGreat work!!! You chose ${choiceResult.choice}!`);
    await setTimeoutPromise(3_000);
}

const manager = async () => {
    const managerResult = await inquirer.prompt([
        {
            type: 'input',
            name: 'managerName',
            message: questions[0],
            validate(answer) {
                if (!isNaN(Number(answer)) || answer.trim().length === 0) {
                    console.log('\nPlease enter a non-empty text')
                    return false
                } else {
                    return true
                }
            }
        },
        {
            type: 'input',
            name: 'managerId',
            message: questions[1],
            validate(answer) {
                if (!isNaN(Number(answer)) || answer.trim().length === 0) {
                    console.log('\nPlease enter a non-empty text')
                    return false
                } else {
                    return true
                }
            }   
        },
        {
            type: 'input',
            name: 'managerEmail',
            message: questions[2],
            validate(answer) {
                if (!isNaN(Number(answer)) || answer.trim().length === 0) {
                    console.log('\nPlease enter a non-empty text')
                    return false
                } else {
                    return true
                }
            }   
        },
        {
            type: 'input',
            name: 'managerNumber',
            message: questions[3],
            validate(answer) {
                if (!isNaN(Number(answer)) || answer.trim().length === 0) {
                    console.log('\nPlease enter a non-empty text')
                    return false
                } else {
                    return true
                }
            }   
        },
    ])
    console.log(`\nGreat work!!! Manager ${managerResult.managerName} has been created!`);
    await setTimeoutPromise(3_000);
    console.log(managerResult)
}

const init = async () => {
    await welcome();
    await manager();
    await choice();
    

}


init();