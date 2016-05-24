import { WikiPage } from './app.po';

describe('wiki App', function() {
  let page: WikiPage;

  beforeEach(() => {
    page = new WikiPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('wiki works!');
  });
});
