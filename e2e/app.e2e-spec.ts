/* tslint:disable */
import { VsWebsitePage } from './app.po';

describe('vs-website App', function() {
  let page: VsWebsitePage;

  beforeEach(() => {
    page = new VsWebsitePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
/* tslint:enable */
