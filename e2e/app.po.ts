export class WikiPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('wiki-app h1')).getText();
  }
}
