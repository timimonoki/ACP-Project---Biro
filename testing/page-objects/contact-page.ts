export class ContactPage {

    get getContactPageWrapper() { return browser.element("#content-wrapper"); }
    get getContactHeader() { return browser.element("#content-wrapper h2"); }
    get getFacebookContactLink() { return browser.element(".info [href='https://www.facebook.com/pcgarage']"); }
}