import { modalTypes } from './types';

export const openModal = () => {
  return {
    type: modalTypes.CLOSE_MODAL,
    payload: true,
  };
};

export const closeModal = () => {
  return {
    type: modalTypes.CLOSE_MODAL,
    payload: false,
  };
};
