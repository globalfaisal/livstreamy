import history from '../utils/history/history';
import { authTypes } from './types';

export const signIn = userProfile => {
  return {
    type: authTypes.SIGN_IN,
    payload: userProfile,
  };
};

export const signOut = () => dispatch => {
  dispatch({
    type: authTypes.SIGN_OUT,
    payload: null,
  });

  // redirect to the root route
  history.push('/');
};
