# Login Page Automation 

This file contains details to import the project, steps to execute it and view the reports

**Approach**: I decided to follow POM design pattern approach as:  
 1. It would be more scalable if more web pages gets added to the application
 2. Maintainence could be easy

**Prerequisites:**
1. Latest Node.js installed
2. Visual studio code installed


**Technology Used**  
1. Programming language - JavaScript
2. Automation tool - Cypress
3. IDE - Visual Studio Code
4. Reporting - Mochawesome reports


**This project contains multiple scenarios to validate Login functionality**

 1> All the test cases are stored in a js file named "LoginTest.js" under cypress/integration location
 
 
**Framework overview** 

 1. cypress/integration - It contains LoginTest.js file which contains all the scenarios to be tested
 2. cypress/pages - It contains the page classes for our webpage to hold properties of the webpage. Eg: LoginPage.js contains all the webelements and methods for LoginPage
 3. cypress/util - It contains PageAction.js which has all web page related resuable methods like click, enter text, etc.
 4. cypress.json - It is used to used to store any configuration values like baseUrl, retry count, report properties, etc
 5. package.json - it has all the dependencies and scripts required for project.

 
**Steps to Import and Run the project using terminal**

 1. Import project in VS Code
 2. Open Terminal -> New Terminal
 3. Run command -> npm cypress install (This will install all node modules) 
 4. Run command -> npm run test
 5. Reports gets generated and can be seen under root directory with name **LoginTestReport.html**

**Run the project using cypress test runner** 
 1. Open Terminal -> New Terminal
 2. Run command -> npx cypress open
 3. Once runner window is opened, click on LoginTest.js (Testcase file) 
 4. The execution of test cases can be seen on browser

**To view execution reports**

 1. Go to root folder -> LoginTestReport.html
 2. Video can also be viewed under videos directory when test cases are executed through terminal using command mentioned above (npm run test)


**Potential for future work**
 1. Assertions could be better
 2. More scenarios could be added
 3. Exception handling could be added