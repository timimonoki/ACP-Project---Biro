import {MainPage} from "../page-objects/main-page";
import {Constants} from "./utils/constants";

describe("Unsubscribe newsletter test - ", function () {
    let mainPage;

    beforeEach(function () {
        browser.windowHandleMaximize();
        mainPage = new MainPage();
    });

    it("verify unsubscribe functionality", function () {
        mainPage.goToHomepage();
        mainPage.getTopMenu.waitForVisible(5000);
        expect(mainPage.getSubscribeNewsletterLink.isVisible()).toBe(true, "Link-ul -Abonare newsletter- nu este afisat");
        mainPage.getSubscribeNewsletterLink.click();
        mainPage.getNewsletterForm.waitForVisible(5000);
        mainPage.getUnsubscribeEmailInput.setValue(Constants.EMAIL);
        mainPage.getUnsubscribeButton.click();
    });
});