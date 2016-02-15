import expect from 'expect';
import * as actions from '../../actions';

describe('actions', () => {
  it('should create an action to sign in', () => {
    const expectedAction = {
      type: actions.SIGN_IN_REQUEST,
    };
    expect(actions.signIn()).toEqual(expectedAction);
  });
  it('should create an action to show the sign in was successful', () => {
    const expectedAction = {
      type: actions.SIGN_IN_SUCCESS,
      username: 'username',
    };
    expect(actions.signInSuccess('username')).toEqual(expectedAction);
  });
  it('should create an action to show the sign in was not successful', () => {
    const expectedAction = {
      type: actions.SIGN_IN_FAILURE,
      error: 'error',
    };
    expect(actions.signInFailure('error')).toEqual(expectedAction);
  });
});
