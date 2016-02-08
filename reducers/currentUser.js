import * as actions from '../actions';

const initialState = {
  username: undefined,
  requestingSignIn: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case actions.SIGN_IN_REQUEST:
      return {
        ...state,
        requestingSignIn: true,
      }
    case actions.USER_LOAD:
      return {
        ...state,
        username: action.username,
        requestingSignIn: false,
      };
    case actions.USER_UNLOAD:
      return {
        ...state,
        username: undefined,
      };
    default:
      return state;
  }
};
