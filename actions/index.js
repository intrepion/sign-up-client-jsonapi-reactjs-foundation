export const USER_LOAD = 'USER_LOAD';
export const USER_UNLOAD = 'USER_UNLOAD';

export const SIGN_IN_REQUEST = 'SIGN_IN_REQUEST';
export const SIGN_IN_SUCCESS = 'SIGN_IN_SUCCESS';
export const SIGN_IN_FAILURE = 'SIGN_IN_FAILURE';

export function signIn() {
  return {
    type: SIGN_IN_REQUEST,
  };
}

export function signInSuccess(cart) {
  return {
    type: SIGN_IN_SUCCESS,
    cart,
  };
}

export function signInFailure(error) {
  return {
    type: SIGN_IN_FAILURE,
    error,
  };
}
