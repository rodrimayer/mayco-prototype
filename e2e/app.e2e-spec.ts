import { MaycoPage } from './app.po';

describe('mayco App', () => {
  let page: MaycoPage;

  beforeEach(() => {
    page = new MaycoPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
