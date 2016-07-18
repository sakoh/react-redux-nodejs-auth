var expect = require('chai').expect;

describe('Signin', () => {
  beforeEach(() => {
    browser.url('/signin');
  });

  it('should redirect to /feature', () => {
    browser
      .setValue('input.input-email', 'jameswest@example.com')
      .setValue('input.input-password', 'password')
      .submitForm('.signin-component')
      .waitForVisible('.feature-component', () => {
        expect(this.getText()).to.equal('hidden feature');
      });
  });

  describe('Validation', () => {
    it('should show error if email is missing', () => {
      browser
        .setValue('input.input-password', 'password')
        .submitForm('.signin-component')
        .waitForVisible('.alert-component', () => {
          expect(this.getText()).to.equal('You must provide an email');
        });
    });

    it('should show error if password is missing', () => {
      browser
        .setValue('input.input-email', 'jameswest@example.com')
        .submitForm('.signin-component')
        .waitForVisible('.alert-component', () => {
          expect(this.getText()).to.equal('You must provide a password');
        });
    });
  });
});
