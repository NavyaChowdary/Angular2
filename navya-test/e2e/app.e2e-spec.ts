import { NavyaTestPage } from './app.po';

describe('navya-test App', function() {
  let page: NavyaTestPage;

  beforeEach(() => {
    page = new NavyaTestPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
