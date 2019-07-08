import { authTypes } from './types';

export const signIn = userProfile => {
  return {
    type: authTypes.SIGN_IN,
    payload: userProfile,
  };
};

export const signOut = () => {
  return {
    type: authTypes.SIGN_OUT,
    payload: {},
  };
};
