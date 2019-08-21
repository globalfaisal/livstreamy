import { modalTypes } from '../actions/types';

export default (state = false, action) => {
  switch (action.type) {
    case modalTypes.OPEN_MODAL:
      return action.payload;
    case modalTypes.CLOSE_MODAL:
      return action.payload;
    default:
      return state;
  }
};
