import { GridtestAppPage } from './app.po';

describe('gridtest-app App', () => {
  let page: GridtestAppPage;

  beforeEach(() => {
    page = new GridtestAppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
