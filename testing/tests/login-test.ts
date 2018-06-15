import {Constants} from "./utils/constants";
import {MainPage} from "../page-objects/main-page";
import {AccountPage} from "../page-objects/account-page";


describe("Test login funcionality", function () {
    let mainPage;
    let accountPage;

    beforeEach(function () {
        browser.windowHandleMaximize();
        mainPage = new MainPage();
        accountPage = new AccountPage();
    });

    it("verify that login works correctly", function () {
        mainPage.goToHomepage();
        mainPage.getTopMenu.waitForVisible(5000);
        expect(accountPage.getMyAccountLink.isVisible()).toBe(true, "Butonul -Contul meu- nu este vizibil");
        accountPage.getMyAccountLink.click();
        accountPage.getLoginForm.waitForVisible(5000);
        var currentUrl = browser.getUrl();
        expect(currentUrl).toContain(Constants.LOGIN_AUTHENTICATION_LINK);
        accountPage.getLoginEmailInput.setValue(Constants.EMAIL);
        accountPage.getLoginPasswordInput.setValue(Constants.PASSWORD);
        accountPage.getLoginButton.scroll(0,100);
        accountPage.getLoginButton.click();
        accountPage.getWelcomeMessage.waitForVisible(5000, "Login-ul nu a fost cu succes");
        var currentUrl = browser.getUrl();
        expect(currentUrl).toContain(Constants.ACCOUNT_LINK);
        expect(accountPage.getWelcomeMessage.getText()).toContain(Constants.REGISTRATION_FIRST_NAME);
    });
});