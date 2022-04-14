import { PageActions } from "../utils/PageActions";
export class LoginPage {

    loginPage_username = '.login__email .input__input';
    loginPage_password = '.login__password .input__input';
    loginPage_loginButton = '#loginForm > .button__primary';
    loginPage_userIcon = '.header-component__button > .button > .icon';
    loginPage_bannerAcceptButton = '.uc-overlay__buttons .button__primary';
    loginPage_userLoggedInTick = '.header-component__button .account-flyout__status.icon.icon--SVG_19.icon--color-success';
    loginPage_incorrectCredentialsError = '.alert > .google-translate-fallback';
    loginPage_errorMessage = '.alert > .google-translate-fallback font > font';
    loginPage_emailErrorMessage = '.input__error';
    loginPage_MandatoryMessageUsername = '.input__container.login__email .input__error';
    loginPage_MandatoryMessagePassword = '.input__container.login__password .input__error';
    loginPage_forgotPasswordLink = '.login__link';
    loginPage_forgotPasswordEmail = 'input[name="forgotPasswordEmail"]'
    loginPage_sendEmail = '[data-testid="row"] > :nth-child(2) > .button';
    loginPage_verifyEmailSentMessage = '.headline-thin';
    loginPage_clickConcludeButton = '.forgot-password__confirmation > .button';

    pageActions = new PageActions;

    navigate(url) {
        this.pageActions.deleteAllCookies();
        this.pageActions.openPageUrl(url);
    }

    clickUserIcon(){
        this.pageActions.clickButtonWithTimeout(this.loginPage_bannerAcceptButton, 25000);
        this.pageActions.clickButton(this.loginPage_userIcon);
    }

    enterCredentials(username, password) {
        this.pageActions.enterTextInto(this.loginPage_username, username);
        this.pageActions.enterTextInto(this.loginPage_password, password);

    }

    clickLoginButton() {
        this.pageActions.clickButton(this.loginPage_loginButton);
    }

    validateLoginSuccessfully() {
        this.pageActions.assertElementExist(this.loginPage_userLoggedInTick);
    }

    validateLoginError(arr) {
        this.pageActions.assertElementExist(this.loginPage_incorrectCredentialsError);
        this.pageActions.assertElementText(this.loginPage_incorrectCredentialsError, arr);

    }

    validateEmailIdErrorMessage(arr) {
        this.pageActions.assertElementExist(this.loginPage_emailErrorMessage);
        this.pageActions.assertElementText(this.loginPage_emailErrorMessage, arr);

    }

    validateMandatoryFieldErrorMessage(arr) {
        this.pageActions.assertElementExist(this.loginPage_MandatoryMessageUsername);
        this.pageActions.assertElementExist(this.loginPage_MandatoryMessagePassword);
        this.pageActions.assertElementText(this.loginPage_MandatoryMessageUsername, arr);
        this.pageActions.assertElementText(this.loginPage_MandatoryMessagePassword, arr);
    }

    clickForgotPassword() {
        this.pageActions.clickButton(this.loginPage_forgotPasswordLink);
    }

    enterForgotPasswordEmail(emailId) {
        this.pageActions.enterTextInto(this.loginPage_forgotPasswordEmail, emailId);
    }
    clickSendEmailButtton() {
        this.pageActions.clickButton(this.loginPage_sendEmail);
    }

    validateEmailSentConfirmationWindow(arr) {
        this.pageActions.assertElementText(this.loginPage_verifyEmailSentMessage, arr);
        this.pageActions.clickButton(this.loginPage_clickConcludeButton);
    }

    

}