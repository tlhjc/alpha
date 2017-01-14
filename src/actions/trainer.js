import { SET_TRAINER } from '../constants/action_types.js';
import data from '../constants/trainer_data.js';

export const setTrainer = (trainerData) => { return {type: SET_TRAINER, trainerData}; };

export const getTrainerData = (trainer) => {
  return (dispatch) => {
    const trainerData = data.filter(data => {
      return data.instagram === trainer;
    });
    dispatch(setTrainer(trainerData));
  }
};
