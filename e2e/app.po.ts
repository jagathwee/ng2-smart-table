import { browser, element, by } from 'protractor';

export class Ng2SmartTableDemoPage {
  navigateTo(): any {
    return browser.get('/');
  }

  getParagraphText(): any {
    return element(by.css('app-root h1')).getText();
  }
}
