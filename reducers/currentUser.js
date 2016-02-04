import {
  USER_LOAD,
  USER_UNLOAD,
} from '../constants/actionTypes';

const initialState = {
  username: undefined,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case USER_LOAD:
      return {
        ...state,
        username: action.username,
      };
    case USER_UNLOAD:
      return {
        ...state,
        username: undefined,
      };
    default:
      return state;
  }
};
