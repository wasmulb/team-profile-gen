# Team Profile Generator

## Video Tutorial Link: https://drive.google.com/file/d/1EMrGTHntlTDrV28-pb_X9EW7FTLCx_QN/view

## Description

For this assignment, I built a command-line application that allows an employer to create a team profile website with all of their employees. The user has the option to add one of the following employee types: manager, engineer, or intern. The web page that is created includes the employees' information (name, role, ID, email, office number (for managers), GitHub account (for engineers), and school (for interns)). The generated web page includes links for emails, as well as the GitHub repository. 

This application utilized node.js, inquirer (v8.2.4), and jest for testing.

## Installation

To install the application, clone the repository to your local environment. Ensure you have node.js installed. Install jest and inquirer (v8.2.4).

## Usage

To generate a web page:
-Ensure the installation steps were complete.
-Navigate to the directory.
-In your terminal, "node index.js"
-Answer the questions in the questionaire.
-When all employees have been added, select the fourth option on the menu ("No more team members (Generate web page)").
-Then an HTML file is added to 'dist' for the user to use.

To run tests: 
-Ensure the installation steps were complete.
-Navigate to the directory.
-In your terminal, "npm run test"

## License

The MIT license was used for this assignment.


## Tests

Tests were written for every class (employee, manager, engineer, and intern). The tests verify that the constructors work as intended. For instructions on running the test, see the Usage section of this README. 