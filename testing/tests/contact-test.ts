import {MainPage} from "../page-objects/main-page";
import {Constants} from "./utils/constants";
import {ContactPage} from "../page-objects/contact-page";

describe("Contact page test - ", function () {
    let mainPage;
    let contactPage;

    beforeEach(function () {
        browser.windowHandleMaximize();
        mainPage = new MainPage();
        contactPage = new ContactPage();
    });

    it("Verify that accesing the Facebook link from Contact page opens the correct page", function () {
        mainPage.goToHomepage();
        mainPage.getTopMenu.waitForVisible(5000);
        expect(mainPage.getContactLink.isVisible()).toBe(true, "Link-ul -Abonare newsletter- nu este afisat");
        mainPage.getContactLink.click();
        contactPage.getContactPageWrapper.waitForVisible(5000);
        expect(contactPage.getContactHeader.isVisible()).toBe(true, "Pagina de contact nu s-a deschis corect");

        //after clicking Facebook link, the website should open in a new tab
        var location = contactPage.getFacebookContactLink.getLocation();
        contactPage.getFacebookContactLink.scroll(0,location.y - 100);
        contactPage.getFacebookContactLink.click();
        var allTabs = browser.getTabIds();
        browser.switchTab(allTabs[1]);
        browser.pause(3000);
        var currentUrl = browser.getUrl();
        expect(currentUrl).toEqual(Constants.FACEBOOK_URL);
    });
});