import expect from 'expect';
import deepFreeze from 'deep-freeze';
import currentUser from '../../reducers/currentUser';
import {
  USER_LOAD,
} from '../../constants/actionTypes';

describe('currentUser reducer', () => {
  it('should handle initial state', () => {
    const oldState = undefined;
    const action = {
      type: undefined,
    };
    deepFreeze(action);
    const newState = {
      username: undefined,
    };
    expect(
      currentUser(oldState, action)
    ).toEqual(newState);
  });
});
