import {
  USER_LOAD,
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
    default:
      return state;
  }
};
