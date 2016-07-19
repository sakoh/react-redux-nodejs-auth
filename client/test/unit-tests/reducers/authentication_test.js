import { expect } from '../test_helper';
import {
  AUTH_USER,
  UNAUTH_USER,
  SEND_ALERT,
  CLEAR_ALERT,
  FETCH_MESSAGE
} from '../../../src/actions/types';
import authenReducer from '../../../src/reducers/auth_reducer';

describe('Reducers', () => {
  describe('authenReducer', () => {

    it('sets authenticated to true user when it receives the AUTH_USER type', () => {

     const result = authenReducer({}, { type: AUTH_USER });

     expect(result.authenticated).to.equal(true);
    });

    it('sets authenticated to true user when it receives the UNAUTH_USER type', () => {

     const result = authenReducer({}, { type: UNAUTH_USER });

     expect(result.authenticated).to.equal(false);
    });

    it('sets alert message and status to the same values as the payload when it receives the SEND_ALERT type', () => {

      const payload = {
        message: "you have received an error",
        status: "danger"
      }

     const result = authenReducer({}, { type: SEND_ALERT, payload: payload });

     expect(result.alert).to.equal(payload);
    });

    it('clears alert when it receives action.type CLEAR_ALERT', () => {
      const result = authenReducer({}, { type: CLEAR_ALERT });

      expect(result.alert).to.equal(null);
    });
  });
});
