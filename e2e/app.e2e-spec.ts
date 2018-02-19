import { AdmStandardPage } from './app.po';

describe('adm-standard App', function() {
  let page: AdmStandardPage;

  beforeEach(() => {
    page = new AdmStandardPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
