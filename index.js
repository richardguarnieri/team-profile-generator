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
    "Question #5 - Where do you want to go now?",
    "Question #1 - Please enter the engineer's name:",
    "Question #2 - Please enter the engineer's employee id:",
    "Question #3 - Please enter the engineer's email address:",
    "Question #4 - Please enter the engineer's GitHub username:",
    "Question #1 - Please enter the intern's name:",
    "Question #2 - Please enter the intern's employee id:",
    "Question #3 - Please enter the intern's email address:",
    "Question #4 - Please enter the intern's school:",
];

const choices = [
    "1) Create an Engineer",
    "2) Create an Intern",
    "3) I'm done! don't want to add anyone else!"
];

let managers = 0;
let engineers = 0;
let interns = 0;

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

const createManager = async () => {
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
    await setTimeoutPromise(2_000);
    console.log(`\nGreat work! The manager ${managerResult.managerName} has been created!\n`);
    managers += 1;
    await choice();
    // console.log(managerResult)
}

const choice = async () => {
    await setTimeoutPromise(3_000);
    console.log("Please continue building your team! Select either an Engineer or an Intern (or quit if you don't want to add anyone else!):\n")
    await setTimeoutPromise(3_000);
    const choiceResult = await inquirer.prompt([
        {
            type: 'list',
            name: 'choice',
            message: questions[4],
            choices: choices,
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
    console.log(`\nYou chose ${choiceResult.choice}!`);
    await setTimeoutPromise(3_000);
    if (choiceResult.choice === choices[2]) {
        console.log(`\nThank you for building the team! The team consists of ${managers + engineers + interns} employees!`);
        return
    } else if (choiceResult.choice === choices[0]) {
        console.log("\nLet's create that Engineer!");
        createEngineer();        
    } else {
        console.log("\nLet's create that Intern!");
        createIntern();
    }
    await setTimeoutPromise(3_000);
}

const createEngineer = async () => {
    const engineerResult = await inquirer.prompt([
        {
            type: 'input',
            name: 'engineerName',
            message: questions[5],
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
            name: 'engineerId',
            message: questions[6],
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
            name: 'engineerEmail',
            message: questions[7],
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
            name: 'engineerGithub',
            message: questions[8],
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
    await setTimeoutPromise(2_000);
    console.log(`\nGreat work! The engineer ${engineerResult.engineerName} has been created!\n`);
    engineers += 1;
    choice();

}

const init = async () => {
    await welcome();
    await createManager();
    

}


init();