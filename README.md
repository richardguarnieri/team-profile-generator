<!-- This template was created following The Markdown Guide - https://www.markdownguide.org/ -->

<!-- If you are editing this README.md on VS Code, please highlight and replace the following keywords enclosed in backticks (``) using:
* MacOS: CMD + Shift + L
* Windows: CRTL + Shift + L

GitHub Username: `richardguarnieri`
GitHub Repository: `team-profile-generator`
Your Name: `Richard Guarnieri`
Email: `richard.gm@outlook.com`
LinkedIn Username: `rguarnieri`
Twitter Username: `ric_guarnieri`
Project Title: `Team Profile Generator`
Project Description: `Team Profile Generator via Node.js and HTML`
-->

<!-- Please also update the following links -->
[logo]: ./img/logo.png
[application-image]: ./img/app-image.png
[application-url]: https://example.com/

<div id="home"><div> 

<!-- Badges / Shields -->
<!-- These were created using https://shields.io/ - feel free to replace / create yours by modifying links below: -->

<div align="center">
    <a href="https://github.com/richardguarnieri/team-profile-generator/graphs/contributors">
        <img alt="GitHub contributors" src="https://img.shields.io/github/contributors/richardguarnieri/team-profile-generator?style=for-the-badge">
    <a>
     <a href="https://github.com/richardguarnieri/team-profile-generator/network/members">
        <img alt="GitHub forks" src="https://img.shields.io/github/forks/richardguarnieri/team-profile-generator?style=for-the-badge">
    <a>
     <a href="https://github.com/richardguarnieri/team-profile-generator/stargazers">
        <img alt="GitHub stars" src="https://img.shields.io/github/stars/richardguarnieri/team-profile-generator?style=for-the-badge">
    <a>
     <a href="https://github.com/richardguarnieri/team-profile-generator/issues">
        <img alt="GitHub issues" src="https://img.shields.io/github/issues/richardguarnieri/team-profile-generator?style=for-the-badge">
    <a>
     <a href="https://github.com/richardguarnieri/team-profile-generator/blob/main/LICENSE">
        <img alt="GitHub license" src="https://img.shields.io/github/license/richardguarnieri/team-profile-generator?label=license&style=for-the-badge">
    <a>
     <a href="https://github.com/richardguarnieri/team-profile-generator/commits/main">
        <img alt="GitHub last commit" src="https://img.shields.io/github/last-commit/richardguarnieri/team-profile-generator?style=for-the-badge">
    <a>
    <a href="https://www.linkedin.com/in/rguarnieri/">
        <img alt="LinkedIn shield" src="https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555">
    <a>
</div>
<br>


<!-- Header -->

<div align="center">
    <a href="https://github.com/richardguarnieri/team-profile-generator">
        <img src="./img/logo.png" alt="Logo" width="300" height="auto">
    </a>
    <h1 align="center">Team Profile Generator</h1>
    <div>
        Team Profile Generator via Node.js and HTML
        <br>
        <a href="https://github.com/richardguarnieri/team-profile-generator">
            <strong>Explore Documentation</strong>
        </a>
        <br>
        <br>
        <a href="https://github.com/richardguarnieri/team-profile-generator">View Demo</a>
        ·
        <a href="https://github.com/richardguarnieri/team-profile-generator/issues">Report Bug / Request Feature</a>
    </div>
</div>
<br>


<!-- Table of Contents -->
## Table of Contents
* [The Project](#the-project)
    * [Technology Stack](#technology-stack)
* [Getting Started](#getting-started)
    * [Prerequisites](#prerequisites)
    * [Installation](#installation)
* [How to Use](#how-to-use)
* [Contributing](#contributing)
* [License](#license)
* [Contact](#contact)
* [Tests](#tests)
* [Miscellaneous](#miscellaneous)
    * [User Story](#user-story)
    * [Acceptance Criteria](#acceptance-criteria)
<br>


<!-- The Project -->
## The Project

[![Application Image][application-image]][application-url]

This is a Node.js command-line application that takes in information about employees, then generates an HTML webpage that displays summaries for each person. 

It was built using TDD (Test Driven Development), which is a software development practice that focuses on creating unit test cases before developing the actual code.

<p align="right"> - <a href="#home">Return to Home</a></p>

### Technology Stack
Use this section to list the technologies used in the project - examples:

* [HTML](https://html.spec.whatwg.org/)
* [JavaScript](https://www.ecma-international.org/publications-and-standards/standards/ecma-262/)
* [Tailwind CSS](https://tailwindcss.com/)
* [Node.js](https://nodejs.org/en/)
* [inquirer](https://www.npmjs.com/package/inquirer)
* [jest](https://jestjs.io/)


<p align="right"> - <a href="#home">Return to Home</a></p>


<!-- Getting Started -->
## Getting Started
To get started you will need a couple of things - clear explanation of this below:

<p align="right"> - <a href="#home">Return to Home</a></p>

### Prerequisites
[Node.js](https://nodejs.org/en/) as we will need it to install the [inquirer](https://www.npmjs.com/package/inquirer) NPM package to execute the application and [jest](https://jestjs.io/) NPM package to confirm tests are passed.

The application will run on the command-line, meaning this will be the only requirement.

<p align="right"> - <a href="#home">Return to Home</a></p>

### Installation
In order to get started, we must first install Node.js - on macOS I prefer to install it using the Homebrew package manager and on Windows using the Node.js homepage download section.

**On macOS:**
1. To install Homebrew on macOS, browse to [Homebrew's official website](https://brew.sh/) and copy the link displayed on the page on the macOS terminal. At the time of writing, this is the command: 
```shell
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
```

2. Once Homebrew installation is complete, type the following command to install Node.js and NPM:
```shell
brew install node
```

3. Once the installation finishes, confirm that you successfully installed Node.js by checking its version:
```shell
node -v
```

**On Windows:**
1. In a web browser, navigate to https://nodejs.org/en/download/. Click the Windows Installer button to download the latest default version. At the time of writing, the latest LTS version is 16.15.0.

2. Execute the installer to install Node.js

3. Once the installation finishes, confirm that you successfully installed Node.js by checking its version:
```shell
node -v
```

<p align="right"> - <a href="#home">Return to Home</a></p>


<!-- How to Use -->
## How to Use
First, clone this repo via HTTPS in your local computer - feel free to use any storage destination / folder of your choosing. On macOS / Windows, open the CLI (Command Line Interface) and type the following command (ensure you are located in the exact directory where you want to clone the repo):

```shell
git clone https://github.com/richardguarnieri/team-profile-generator.git
```

After the repo has sucessfully cloned, navigate to the repo using the cd (chage directory) command:
```shell
cd team-profile-generator/
``` 

Once inside the team-profile-generator directory, install the necessary node pacakges to run the application - in order to do so, pls type on the CLI the following command:
```shell
npm install
```
Above command will install [inquirer](https://www.npmjs.com/package/inquirer) and [jest](https://jestjs.io/) NPM packages along all its dependencies in a newly generated folder within the team-profile-generator directory called node_modules/

Once installation finishes, we are clear to execute the application. To do so, run the index.js file typing in the CLI the following command:
```shell
npm start
```

After execution, the program will show a welcome message, including brief instructions. Quickly after, you will begin filling the manager's information.

The manager has four questions, these are:
1. Please enter the manager's name:
2. Please enter the manager's employee id:
3. Please enter the manager's email address:
4. Please enter the manager's office number:

After filling the manager's info, you will then have a choice to keep building the team either by choosing an engineer or intern, or simply quit the program - this is on-going and after each engineer / intern you add you are taken back to the menu with the choice to keep adding team members or to quit the program.

The engineer has four questions, these are:
1. Please enter the engineer's name:
1. Please enter the engineer's employee id:
1. Please enter the engineer's email address:
1. Please enter the engineer's GitHub username:

The intern has four questions, these are:
1. Please enter the intern's name:
1. Please enter the intern's employee id:
1. Please enter the intern's email address:
1. Please enter the intern's school:

When you decide on quitting the program or when you finish building the team, an **index.html** file will be generated at /dist folder. Here you will find the generated webpage.

_For more examples, please refer to the [Documentation][documentation-url]._

<p align="right"> - <a href="#home">Return to Home</a></p>


<!-- Contribuiting -->
## Contributing
Contributions are much welcomed! If you have suggestions to make this application better, please fork the repo and create a pull request. 

You can also open an issue [here][github-issues-url] and tag it with the **"enhancement"** label.

<p align="right"> - <a href="#home">Return to Home</a></p>


<!-- License -->
## License
This project is licensed under the terms of the MIT license. 

See `LICENSE` for more information.

<p align="right"> - <a href="#home">Return to Home</a></p>


<!-- Contact -->
## Contact
Richard Guarnieri: richard.gm@outlook.com · LinkedIn: [rguarnieri][linkedin-url] · Twitter: [@ric_guarnieri][twitter-url]


<p align="right"> - <a href="#home">Return to Home</a></p>


<!-- Tests -->
## Tests
Feel free to go the extra mile and write tests for your application. Then provide examples on how to run them here.

<p align="right"> - <a href="#home">Return to Home</a></p>


<!-- Miscellaneous -->
## Miscellaneous
## User Story
```
AS A manager
I WANT to generate a webpage that displays my team's basic info
SO THAT I have quick access to their emails and GitHub profiles
```

<p align="right"> - <a href="#home">Return to Home</a></p>

### Acceptance Criteria
```
GIVEN a command-line application that accepts user input
WHEN I am prompted for my team members and their information
THEN an HTML file is generated that displays a nicely formatted team roster based on user input
WHEN I click on an email address in the HTML
THEN my default email program opens and populates the TO field of the email with the address
WHEN I click on the GitHub username
THEN that GitHub profile opens in a new tab
WHEN I start the application
THEN I am prompted to enter the team manager’s name, employee ID, email address, and office number
WHEN I enter the team manager’s name, employee ID, email address, and office number
THEN I am presented with a menu with the option to add an engineer or an intern or to finish building my team
WHEN I select the engineer option
THEN I am prompted to enter the engineer’s name, ID, email, and GitHub username, and I am taken back to the menu
WHEN I select the intern option
THEN I am prompted to enter the intern’s name, ID, email, and school, and I am taken back to the menu
WHEN I decide to finish building my team
THEN I exit the application, and the HTML is generated
```

<p align="right"> - <a href="#home">Return to Home</a></p>


<!-- References, Links and Images -->
<!-- Badges / Shields Styles -->
[github-contributors-shield]: https://img.shields.io/github/contributors/richardguarnieri/team-profile-generator?style=for-the-badge
[github-forks-shield]: https://img.shields.io/github/forks/richardguarnieri/team-profile-generator?style=for-the-badge
[github-stars-shield]: https://img.shields.io/github/stars/richardguarnieri/team-profile-generator?style=for-the-badge
[github-issues-shield]: https://img.shields.io/github/issues/richardguarnieri/team-profile-generator?style=for-the-badge
[github-license-shield]: https://img.shields.io/github/license/richardguarnieri/team-profile-generator?style=for-the-badge
[github-last-commit-shield]: https://img.shields.io/github/last-commit/richardguarnieri/team-profile-generator?style=for-the-badge
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555

<!-- Badges / Shields URL -->
[github-contributors-url]: https://github.com/richardguarnieri/team-profile-generator/graphs/contributors
[github-forks-url]: https://github.com/richardguarnieri/team-profile-generator/network/members
[github-stars-url]: https://github.com/richardguarnieri/team-profile-generator/stargazers
[github-issues-url]: https://github.com/richardguarnieri/team-profile-generator/issues
[github-license-url]: https://github.com/richardguarnieri/team-profile-generator/blob/main/LICENSE
[linkedin-url]: https://linkedin.com/in/rguarnieri

<!-- Non Badge / Shield Reference Links -->
[documentation-url]: https://github.com/richardguarnieri/team-profile-generator
[twitter-url]: https://twitter.com/ric_guarnieri