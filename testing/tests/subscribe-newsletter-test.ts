import {MainPage} from "../page-objects/main-page";
import {Constants} from "./utils/constants";

describe("Subscribe newsletter test - ", function () {
    let mainPage;

    beforeEach(function () {
        browser.windowHandleMaximize();
        mainPage = new MainPage();
    });

    it("verify subscribe functionality", function () {
        mainPage.goToHomepage();
        mainPage.getTopMenu.waitForVisible(5000);
        expect(mainPage.getSubscribeNewsletterLink.isVisible()).toBe(true, "Link-ul -Abonare newsletter- nu este afisat");
        mainPage.getSubscribeNewsletterLink.click();
        mainPage.getNewsletterForm.waitForVisible(5000);
        mainPage.getSubscribeEmailInput.setValue(Constants.EMAIL);
        mainPage.getSubscribeNameInput.setValue(Constants.NAME_SUBSCRIBE_NEWSLETTER);
        var location = mainPage.getSubscribeButton.getLocation();
        mainPage.getSubscribeButton.scroll(0,location.y - 100);
        mainPage.getSubscribeButton.click();
        mainPage.getUnsubscribeConfirmation.waitForVisible(5000);
        expect(mainPage.getUnsubscribeConfirmation.isVisible()).toBe(true, "Dezabonarea la newletter nu a fost cu succes");
    });
});