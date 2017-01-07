import { SET_TRAINING_METHOD } from '../constants/action_types.js';
import data from '../constants/dummy_data.js';

export const setTrainingMethod = (methodData) => { return {type: SET_TRAINING_METHOD, methodData}; };

export const getTrainingMethodData = (method) => {
  return (dispatch) => {
    const methodData = data.filter(data => {
      return data.name === method;
    });
    dispatch(setTrainingMethod(methodData));
  }
};
