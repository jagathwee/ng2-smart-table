import { browser, element, by } from 'protractor';

export class Ng2SmartTableDemoPage {
  navigateTo(): any { /*https://github.com/DefinitelyTyped/DefinitelyTyped/issues/21638*/
    return browser.get('/');
  }

  getParagraphText(): any {
    return element(by.css('app-root h1')).getText();
  }
}
