export class AccountPage {

    get getMyAccountLink() { return browser.element("#user_header a"); }
    get getLoginForm() { return browser.element("#login"); }
    get getRegistrationForm() { return browser.element("#register"); }
    get getLoginEmailInput() { return browser.element("#email"); }
    get getLoginPasswordInput() { return browser.element("#password"); }
    get getLoginButton() { return browser.element("#login .large-submit"); }
    get getRegistrationFirstNameInput() { return browser.element("#newfirstname"); }
    get getRegistrationLastNameInput() { return browser.element("#newlastname"); }
    get getRegistrationPhoneInput() { return browser.element("#telephone"); }
    get getRegistrationEmailInput() { return browser.element("#newemail"); }
    get getRegistrationPasswordInput() { return browser.element("#newpassword"); }
    get getRegistrationRetypePasswordInput() { return browser.element("#newpasswordretype"); }
    get getRegisterButton() { return browser.element("#register .large-submit"); }
    get getWelcomeMessage() { return browser.element("#listing-right h1"); }
}