import { modalTypes } from '../actions/types';

const INITIAL_STATE = {};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case modalTypes.OPEN_MODAL:
      return { ...state, isOpen: action.payload };
    case modalTypes.CLOSE_MODAL:
      return { ...state, isOpen: action.payload };
    default:
      return state;
  }
};
