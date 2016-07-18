import { expect } from '../test_helper';
import {
  signupUser,
  signinUser,
  signoutUser,
  sendAlert
} from '../../../src/actions/';
import {
  AUTH_USER,
  UNAUTH_USER,
  SEND_ALERT
} from '../../../src/actions/types';

describe('Action Creators', () => {
  let action;
  
  describe('singoutUser', () => {

    beforeEach(() => {
      action = signoutUser();
    });

    it('should return the right action_type', () => {

      expect(action.type).to.equal(UNAUTH_USER);
    });
  });

  describe('sendAlert', () => {

    beforeEach(() => {
      action = sendAlert("email in use", "danger");
    });

    it('should return the right action_type', () => {

      expect(action.type).to.equal(SEND_ALERT);
    });

    it('should return the right message', () => {

      expect(action.payload.message).to.equal('email in use');
    });

    it('should return the right status', () => {

      expect(action.payload.status).to.equal('danger');
    });
  });
});
