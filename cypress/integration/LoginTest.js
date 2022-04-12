import { LoginPage } from "../pages/LoginPage"

const loginPage = new LoginPage;
const url = 'http://www.douglas.de/';
const emailErrorText = ['Invalid e-mail address', 'Ungültige E-Mail-Adresse'];
const mandatoryFieldsText = ['* Required field', '* Pflichtfeld'];
const emailSentText = ['email sent', 'E-Mail verschickt'];
const loginErrorText = ['Wrong access data', 'Falsche Zugangsdaten'];

var username;
var password;


describe('Douglas Login Page', () => {
    beforeEach(() => {
        loginPage.navigate(url);
    })

    it('Validate if user is logged in successfully using correct credentials', () => {
        username = 'yogesh16991@gmail.com';
        password = 'Cypress@2022';
        loginPage.enterCredentials(username, password);
        loginPage.clickLoginButton();
        loginPage.validateLoginSuccessfully();
    })

    it('Validate if user gets error for incorrect username', () => {
        username = 'incorrect@gmail.com';
        password = 'Cypress@2022';
        loginPage.enterCredentials(username, password)
        loginPage.clickLoginButton();
        loginPage.validateLoginError(loginErrorText);
    })

    it('Validate if user gets error for incorrect Password', () => {
        username = 'yogesh16991@gmail.com';
        password = 'incorrect@2022';
        loginPage.enterCredentials(username, password)
        loginPage.clickLoginButton();
        loginPage.validateLoginError(loginErrorText);
    })

    it('Validate if user gets error for incorrect credentials', () => {
        username = 'incorrect@gmail.com';
        password = 'incorrect@2022';
        loginPage.enterCredentials(username, password)
        loginPage.clickLoginButton();
        loginPage.validateLoginError(loginErrorText);
    })

    it('Validate if user can reset password using Forgot Password', () => {
        username = 'incorrect@gmail.com';
        loginPage.clickForgotPassword();
        loginPage.enterForgotPasswordEmail(username);
        loginPage.clickSendEmailButtton();
        loginPage.validateEmailSentConfirmationWindow(emailSentText);
    })

    it('Validate if user gets error for invalid email format in username', () => {
        username = 'incorrectgmail.com';
        password = 'Cypress@2022';
        loginPage.enterCredentials(username, password)
        loginPage.clickLoginButton();
        loginPage.validateEmailIdErrorMessage(emailErrorText);
    })

    it('Validate if user gets mandatory fields error for username and password', () => {
        loginPage.clickLoginButton();
        loginPage.validateMandatoryFieldErrorMessage(mandatoryFieldsText);
    })

 

})