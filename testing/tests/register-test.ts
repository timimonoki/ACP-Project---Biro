import {Constants} from "./utils/constants";
import {MainPage} from "../page-objects/main-page";
import {AccountPage} from "../page-objects/account-page";

describe("Test registration flow - ", function () {
    let mainPage;
    let accountPage;
    let RANDOM_EMAIL;

    beforeEach(function () {
        browser.windowHandleMaximize();
        mainPage = new MainPage();
        accountPage = new AccountPage();
        RANDOM_EMAIL = Math.random().toString(36).substring(5) + "@rand.com";
    });

    it("verify that registration works correctly", function () {
        mainPage.goToHomepage();
        mainPage.getTopMenu.waitForVisible(5000);
        expect(accountPage.getMyAccountLink.isVisible()).toBe(true, "Butonul -Contul meu- nu este vizibil");
        accountPage.getMyAccountLink.click();
        accountPage.getRegistrationForm.waitForVisible(5000);
        var currentUrl = browser.getUrl();
        expect(currentUrl).toContain(Constants.LOGIN_AUTHENTICATION_LINK);
        accountPage.getRegistrationFirstNameInput.setValue(Constants.REGISTRATION_FIRST_NAME);
        accountPage.getRegistrationLastNameInput.setValue(Constants.REGISTRATION_LAST_NAME);
        accountPage.getRegistrationPhoneInput.setValue(Constants.REGISTRATION_PHONE);
        accountPage.getRegistrationEmailInput.setValue(RANDOM_EMAIL);
        accountPage.getRegistrationPasswordInput.setValue(Constants.PASSWORD);
        accountPage.getRegistrationRetypePasswordInput.setValue(Constants.PASSWORD);
        accountPage.getRegisterButton.scroll(0, 600);
        accountPage.getRegisterButton.click();
        accountPage.getWelcomeMessage.waitForVisible(5000, "Registrarea nu a fost cu succes");
        var currentUrl = browser.getUrl();
        expect(currentUrl).toContain(Constants.ACCOUNT_LINK);
        expect(accountPage.getWelcomeMessage.getText()).toContain(Constants.REGISTRATION_FIRST_NAME);
    });
});