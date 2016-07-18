var expect = require('chai').expect;

describe('Signup', () => {
  beforeEach(() => {
    browser.url('/signup');
  });

  it('should redirect to /feature', () => {
    browser
      .setValue('input.input-email', 'jameswest@example.com')
      .setValue('input.input-password', 'password')
      .setValue('input.input-password-confirm', 'password')
      .submitForm('.signup-component')
      .waitForVisible('.feature-component', () => {
        expect(this.getText()).to.equal('hidden feature');
      });
  });

  describe('Validation', () => {
    it('should show error if email is missing', () => {
      browser
        .setValue('input.input-password', 'password')
        .setValue('input.input-password-confirm', 'password')
        .submitForm('.signup-component')
        .waitForVisible('.alert-component', () => {
          expect(this.getText()).to.equal('You must provide an email');
        });
    });

    it('should show error if password is missing', () => {
      browser
        .setValue('input.input-email', 'jameswest@example.com')
        .setValue('input.input-password-confirm', 'password')
        .submitForm('.signup-component')
        .waitForVisible('.alert-component', () => {
          expect(this.getText()).to.equal('You must provide a password');
        });
    });

    it('should show error if password is not confirmed', () => {
      browser.setValue('input.input-email', 'jameswest@example.com')
             .setValue('input.input-password', 'password')
             .submitForm('.signup-component')
             .waitForVisible('.alert-component', () => {
               expect(this.getText()).to.equal('Your password must be confirmed');
             });
    });

    it('should show error if the passwords do not match', () => {
      browser.setValue('input.input-email', 'jameswest@example.com')
             .setValue('input.input-password', 'password')
             .setValue('input.input-password-confirm', 'passw0rd')
             .submitForm('.signup-component')
             .waitForVisible('.alert-component', () => {
               expect(this.getText()).to.equal('Your passwords must match');
             });
    });
  });
});
