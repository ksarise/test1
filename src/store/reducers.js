import { LOGIN_SUCCESS, LOGIN_FAIL, SIGN_OUT } from './actionTypes';

const auth = (state = false, action) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return { username: action.payload };
    case SIGN_OUT:
    case LOGIN_FAIL:
      return { errorMessage: action.payload };
    default:
      return state;
  }
};

export default auth;
