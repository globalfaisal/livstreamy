import _ from 'lodash';
import { streamsTypes } from '../actions/types';
const INITIAL_STATE = {};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case streamsTypes.FETCH_STREAMS:
      return { ...state, ..._.mapKeys(action.payload, 'id') };
    case streamsTypes.FETCH_STREAM:
      return { ...state, [action.payload.id]: action.payload };
    case streamsTypes.CREATE_STREAM:
      return { ...state, [action.payload.id]: action.payload };
    case streamsTypes.EDIT_STREAM:
      return { ...state, [action.payload.id]: action.payload };
    case streamsTypes.DELETE_STREAM:
      return _.omit(state, action.payload.id);
    default:
      return state;
  }
};
