import streams from '../apis/streams';
import { streamsTypes } from './types';

export const fetchStreams = () => async dispatch => {
  const response = await streams.get('/streams');
  dispatch({
    type: streamsTypes.FETCH_STREAMS,
    payload: response.data,
  });
};

export const fetchStream = id => async dispatch => {
  const response = await streams.get(`/streams/${id}`);
  dispatch({
    type: streamsTypes.FETCH_STREAM,
    payload: response.data,
  });
};

export const createStream = data => async dispatch => {
  const response = await streams.post('/streams', data);
  dispatch({
    type: streamsTypes.CREATE_STREAM,
    payload: response.data,
  });
};

export const editStream = (id, data) => async dispatch => {
  const response = await streams.put(`/streams/${id}`, data);
  dispatch({
    type: streamsTypes.EDIT_STREAM,
    payload: response.data,
  });
};

export const deleteStream = id => async dispatch => {
  const response = await streams.delete(`/streams/${id}`);
  dispatch({
    type: streamsTypes.DELETE_STREAM,
    payload: response.data,
  });
};
