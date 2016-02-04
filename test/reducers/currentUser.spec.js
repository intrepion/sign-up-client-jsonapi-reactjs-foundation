import expect from 'expect';
import deepFreeze from 'deep-freeze';
import currentUser from '../../reducers/currentUser';
import {
  USER_LOAD,
  USER_UNLOAD,
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
  it('should handle user load', () => {
    const oldState = {
      username: undefined,
    };
    const action = {
      type: USER_LOAD,
      username: 'username',
    };
    deepFreeze(oldState);
    deepFreeze(action);
    const newState = {
      username: 'username',
    };
    expect(
      currentUser(oldState, action)
    ).toEqual(newState);
  });
  it('should handle user unload', () => {
    const oldState = {
      username: 'username',
    };
    const action = {
      type: USER_UNLOAD,
    };
    deepFreeze(oldState);
    deepFreeze(action);
    const newState = {
      username: undefined,
    };
    expect(
      currentUser(oldState, action)
    ).toEqual(newState);
  });
});
