import { expect } from '../test_helper';
import {
  AUTH_USER,
  UNAUTH_USER,
  SEND_ALERT
} from '../../../src/actions/types';

describe('Action Types', () => {

  describe('AUTH_USER', () => {

    it("should equal 'AUTH_USER'", () => {
      expect(AUTH_USER).to.equal('AUTH_USER');
    });
  });

  describe('UNAUTH_USER', () => {

    it("should equal 'UNAUTH_USER'", () => {
      expect(UNAUTH_USER).to.equal('UNAUTH_USER');
    });
  });

  describe('SEND_ALERT', () => {

    it("should equal 'SEND_ALERT'", () => {
      expect(SEND_ALERT).to.equal('SEND_ALERT');
    });
  });
});
