var expect = require('chai').expect;

describe('Routes', () => {

    describe("When you visit /", () => {

      it('should should render Home Component', () => {
          browser.url('/');
          var element = browser.getText('.home-component');
          expect(element).to.exist;
      });
    });

    describe("When you visit /signin", () => {
      it('should should render Siginin Component', () => {
          browser.url('/signin');
          var element = browser.getText('.signin-component');
          expect(element).to.exist;
      });
    });

    describe("When you visit /signup", () => {
      it('should should render Signup Component', () => {
          browser.url('/signup');
          var element = browser.getText('.signup-component');
          expect(element).to.exist;
      });
    });
});
