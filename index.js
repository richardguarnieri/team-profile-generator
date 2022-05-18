// Import Dependencies
// Import setTimeout from Node.js
const { setTimeout: setTimeoutPromise } = require('timers/promises');
// Import Inquirer NPM
const inquirer = require('inquirer');
// Import Classes
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

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

// Empty arrays to store objects from each manager / engineer / intern function - keeps count of # of employees
let managers = [];
let engineers = [];
let interns = [];

// Import HTML Generators for Manager, Engineer and Intern
const generateManager = require('./src/generateManager');
const generateEngineer = require('./src/generateEngineer');
const generateIntern = require('./src/generateIntern');

const generateManagersHTML = (array) => {
    let managersHTML = '';
    array.forEach(element => {
        const generatedHTML = generateManager(element);
        managersHTML += generatedHTML;
    })
    return managersHTML;
}

const generateEngineersHTML = (array) => {
    let engineersHTML = '';
    array.forEach(element => {
        const generatedHTML = generateEngineer(element);
        engineersHTML += generatedHTML;
    })
    return engineersHTML;
}
const generateInternsHTML = (array) => {
    let internsHTML = '';
    array.forEach(element => {
        const generatedHTML = generateIntern(element);
        internsHTML += generatedHTML;
    })
    return internsHTML;
}

// Empty arrays to store the generated HTML for each manager / engineer / intern function - will be accessed to create the HTML page
let managerHTML = [];
let engineerHTML = [];
let internHTML = [];


// Utility Validation Functions
// "String" validation: checks whether the input is a "non-empty string"
const stringValidation = (answer) => {
    if (!isNaN(Number(answer)) || answer.trim().length === 0) {
        console.log('\nPlease enter a non-empty text')
        return false
    } else {
        return true
    }
};

// "Number" validation: checks whether the input is a "non-negative number"
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
    // Object destructuring of "managerResult"
    const { name, id, email, officeNumber } = managerResult;
    // Create new instance of Manager using destructured variables - Number(id) is to parse the string 'id' value to a number to avoid validation issues during instance creation as every output of inquirer are strings
    const manager = new Manager(name, Number(id), email, officeNumber);
    // Generates HTML for this object
    managerHTML += generateManager(manager);  
    // Push new Object to managers array
    managers.push(manager)
    await setTimeoutPromise(2_000);
    console.log(`\nGreat work! The manager "${manager.name}" has been created! You now have ${managers.length} manager(s)!\n`);
    // console.log(managers)
    // console.log(managerHTML)
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
        await createEngineer();        
    } else {
        console.log("\nLet's create that Intern!");
        await createIntern();
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
    // Object destructuring of "engineerResult"
    const { name, id, email, github } = engineerResult;
    // Create new instance of Engineer using destructured variables - Number(id) is to parse the string 'id' value to a number to avoid validation issues during instance creation as every output of inquirer are strings
    const engineer = new Engineer(name, Number(id), email, github);
    // Generates HTML for this object
    engineerHTML += generateEngineer(engineer);  
    // Push new Object to managers array
    engineers.push(engineer)
    await setTimeoutPromise(2_000);
    console.log(`\nGreat work! The engineer "${engineer.name}" has been created! You now have ${engineers.length} engineer(s)!\n`);
    // console.log(engineers)
    // console.log(engineerHTML)
    await choice();
}

// Function to create the intern object and store in "interns" array
const createIntern = async () => {
    const internResult = await inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: questionsIntern[0],
            validate: stringValidation
        },
        {
            type: 'input',
            name: 'id',
            message: questionsIntern[1],
            validate: numberValidation
        },
        {
            type: 'input',
            name: 'email',
            message: questionsIntern[2],
            validate: stringValidation 
        },
        {
            type: 'input',
            name: 'school',
            message: questionsIntern[3],
            validate: stringValidation
        },
    ])
    // Object destructuring of "internResult"
    const { name, id, email, school } = internResult;
    // Create new instance of Intern using destructured variables - Number(id) is to parse the string 'id' value to a number to avoid validation issues during instance creation as every output of inquirer are strings
    const intern = new Intern(name, Number(id), email, school);
    // Generates HTML for this object
    internHTML += generateIntern(intern);  
    // Push new Object to managers array
    interns.push(intern)
    await setTimeoutPromise(2_000);
    console.log(`\nGreat work! The intern "${intern.name}" has been created! You now have ${interns.length} intern(s)!\n`);
    // console.log(interns)
    // console.log(internHTML)
    await choice();
}

const generateHTML = () => {
    console.log(generateManagersHTML(managers));
    console.log(generateEngineersHTML(engineers));
    
}






const init = async () => {
    await welcome();
    await createManager();
    await choice();
    generateHTML();

}






// Initiates the app
init();