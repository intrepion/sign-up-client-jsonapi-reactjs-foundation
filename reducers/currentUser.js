import {
  USER_LOAD,
  USER_SIGN_IN_REQUEST,
  USER_UNLOAD,
} from '../constants/actionTypes';

const initialState = {
  username: undefined,
  requestingSignIn: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case USER_LOAD:
      return {
        ...state,
        username: action.username,
        requestingSignIn: false,
      };
    case USER_SIGN_IN_REQUEST:
      return {
        ...state,
        requestingSignIn: true,
      }
    case USER_UNLOAD:
      return {
        ...state,
        username: undefined,
      };
    default:
      return state;
  }
};
