import { authTypes } from '../actions/types';

const INITIAL_STATE = {
  isSignedIn: null,
  user: {},
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case authTypes.SIGN_IN:
      return { ...state, isSignedIn: true, user: action.payload };
    case authTypes.SIGN_OUT:
      return { ...state, isSignedIn: false, user: action.payload };
    default:
      return state;
  }
};
