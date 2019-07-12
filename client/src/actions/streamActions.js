import streams from '../apis/streams';
import { streamsTypes } from './types';

export const fetchStreams = () => async dispatch => {
  const response = await streams.get('/streams');
  return {
    type: streamsTypes.FETCH_STREAMS,
    payload: response.data,
  };
};

export const fetchStream = id => async dispatch => {
  const response = await streams.get(`/streams/${id}`);
  return {
    type: streamsTypes.FETCH_STREAM,
    payload: response.data,
  };
};

export const createStream = data => async dispatch => {
  const response = await streams.post('/streams', data);
  return {
    type: streamsTypes.CREATE_STREAM,
    payload: response.data,
  };
};

export const editStream = (id, data) => async dispatch => {
  const response = await streams.put(`/streams/${id}`, data);
  return {
    type: streamsTypes.EDIT_STREAM,
    payload: response.data,
  };
};

export const deleteStream = id => async dispatch => {
  const response = await streams.delete(`/streams/${id}`);
  return {
    type: streamsTypes.DELETE_STREAM,
    payload: response.data,
  };
};
