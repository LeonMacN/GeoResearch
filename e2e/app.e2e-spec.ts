import { GeoresearchAppPage } from './app.po';

describe('georesearch-app App', () => {
  let page: GeoresearchAppPage;

  beforeEach(() => {
    page = new GeoresearchAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
