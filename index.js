// Import setTimeout from Node.js
const { setTimeout: setTimeoutPromise } = require('timers/promises');

// Import Inquirer NPM
const inquirer = require('inquirer');

// Import Classes
const Employee = require('./lib/Employee');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

// Import HTML Template and Generators
const generateManager = require('./src/generateManager');
const generateEngineer = require('./src/generateEngineer');




let managerHTML;
let engineerHTML;


// Manager questions to user during inquirer.prompt()
const questionsManager = [
    "Question #1 - Please enter the manager's name:",
    "Question #2 - Please enter the manager's employee id:",
    "Question #3 - Please enter the manager's email address:",
    "Question #4 - Please enter the manager's office number:",
];

// Engineer questions to user during inquirer.prompt()
const questionsEngineer = [
    "Question #1 - Please enter the engineer's name:",
    "Question #2 - Please enter the engineer's employee id:",
    "Question #3 - Please enter the engineer's email address:",
    "Question #4 - Please enter the engineer's GitHub username:",
];

// Intern questions to user during inquirer.prompt()
const questionsIntern = [
    "Question #1 - Please enter the intern's name:",
    "Question #2 - Please enter the intern's employee id:",
    "Question #3 - Please enter the intern's email address:",
    "Question #4 - Please enter the intern's school:",
];

// Choices during Engineer / Intern creating during inquirer.prompt()
const choices = [
    "1) Create an Engineer",
    "2) Create an Intern",
    "3) I'm done! don't want to add anyone else!"
];

// Empty arrays to store objects from each manager / engineer / intern function - will be accessed to create the HTML page
let managers = [];
let engineers = [];
let interns = [];

// Utility Validation Function: checks whether the input is a "non-empty string"
const stringValidation = (answer) => {
    if (!isNaN(Number(answer)) || answer.trim().length === 0) {
        console.log('\nPlease enter a non-empty text')
        return false
    } else {
        return true
    }
};
// Utility Validation Function: checks whether the input is a "non-negative number"
const numberValidation = (answer) => {
    if (isNaN(Number(answer)) || Number(answer) < 0) {
        console.log('\nPlease enter a non-negative number')
        return false
    } else {
        return true
    }
};

// Welcome message at the beginning of the application
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

// Function to create the manager object and store in "managers" array
const createManager = async () => {
    const managerResult = await inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: questionsManager[0],
            validate: stringValidation
        },
        {
            type: 'input',
            name: 'id',
            message: questionsManager[1],
            validate: numberValidation
        },
        {
            type: 'input',
            name: 'email',
            message: questionsManager[2],
            validate: stringValidation   
        },
        {
            type: 'input',
            name: 'officeNumber',
            message: questionsManager[3],
            validate: stringValidation
        },
    ])
    const { name, id, email, officeNumber } = managerResult;
    const manager = new Manager(name, Number(id), email, officeNumber);
    // Checks if managerHTML is nullish (null or undefined)
    if (managerHTML) {
        managerHTML += generateManager(manager);  
    } else {
        managerHTML = generateManager(manager);
    }
    managers.push(manager)
    await setTimeoutPromise(2_000);
    console.log(`\nGreat work! The manager "${manager.name}" has been created! You now have ${managers.length} manager(s)!\n`);
    console.log(managers)
    console.log(managerHTML)
}

// Function to select whether the user wants to create engineers / interns or quit the app
const choice = async () => {
    await setTimeoutPromise(2_000);
    console.log("Please continue building your team! Select either an Engineer or an Intern (or quit if you don't want to add anyone else!):\n")
    await setTimeoutPromise(3_000);
    const choiceResult = await inquirer.prompt([
        {
            type: 'list',
            name: 'choice',
            message: "Where do you want to go now?",
            choices: choices,
            validate: stringValidation
        },
    ])
    console.log(`\nYou chose ${choiceResult.choice}!`);
    await setTimeoutPromise(2_000);
    if (choiceResult.choice === choices[2]) {
        console.log(`\nThank you for building the team! The team consists of ${managers.length + engineers.length + interns.length} employees!`);
        return
    } else if (choiceResult.choice === choices[0]) {
        console.log("\nLet's create that Engineer!");
        createEngineer();        
    } else {
        console.log("\nLet's create that Intern!");
        createIntern();
    }
    await setTimeoutPromise(2_000);
}

// Function to create the engineer object and store in "engineers" array
const createEngineer = async () => {
    const engineerResult = await inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: questionsEngineer[0],
            validate: stringValidation
        },
        {
            type: 'input',
            name: 'id',
            message: questionsEngineer[1],
            validate: numberValidation
        },
        {
            type: 'input',
            name: 'email',
            message: questionsEngineer[2],
            validate: stringValidation
        },
        {
            type: 'input',
            name: 'github',
            message: questionsEngineer[3],
            validate: stringValidation
        },
    ])
    const { name, id, email, github } = engineerResult;
    const engineer = new Engineer(name, Number(id), email, github);
    // Checks if engineerHTML is nullish (null or undefined)
    if (engineerHTML) {
        engineerHTML += generateEngineer(engineer);  
    } else {
        engineerHTML = generateEngineer(engineer);
    }
    engineers.push(engineer)
    await setTimeoutPromise(2_000);
    console.log(`\nGreat work! The engineer "${engineerResult.engineerName}" has been created! You now have ${engineers.length} engineer(s)!\n`);
    console.log(engineers)
    console.log(engineerHTML)
    choice();
}

// Function to create the intern object and store in "interns" array
const createIntern = async () => {
    const internResult = await inquirer.prompt([
        {
            type: 'input',
            name: 'internName',
            message: questionsIntern[0],
            validate: stringValidation
        },
        {
            type: 'input',
            name: 'internId',
            message: questionsIntern[1],
            validate: numberValidation
        },
        {
            type: 'input',
            name: 'internEmail',
            message: questionsIntern[2],
            validate: stringValidation 
        },
        {
            type: 'input',
            name: 'internGithub',
            message: questionsIntern[3],
            validate: stringValidation
        },
    ])
    await setTimeoutPromise(2_000);
    interns.push(internResult);
    console.log(`\nGreat work! The intern "${internResult.internName}" has been created! You now have ${interns.length} intern(s)!\n`);
    console.log(interns)
    choice();
}








const init = async () => {
    await welcome();
    await createManager();
    await choice();
}






// Initiates the app
init();