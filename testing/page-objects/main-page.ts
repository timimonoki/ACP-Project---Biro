export class MainPage {

    get getTopMenu() { return browser.element("#topmenu"); }
    get getSubscribeNewsletterLink() { return browser.element("#topmenu a:nth-child(5)"); }
    get getContactLink() { return browser.element("#topmenu a:nth-child(3)"); }
    get getNewsletterForm() { return browser.element("#fixed-content-wrapper .default-form-container"); }
    get getSubscribeEmailInput() { return browser.element("#news_email"); }
    get getSubscribeNameInput() { return browser.element("#news_name"); }
    get getSubscribeButton() { return browser.element("#newsletter_subscribe button.large-submit"); }
    get getSubscribeConfirmation() { return browser.element("#fixed-content-wrapper .action-response"); }
    get getUnsubscribeConfirmation() { return browser.element("#fixed-content-wrapper .action-response"); }
    get getUnsubscribeEmailInput() { return browser.element("#email"); }
    get getUnsubscribeButton() { return browser.element("#newsletter_unsubscribe button.large-submit"); }

    goToHomepage() {
        browser.url("/");
    }
}