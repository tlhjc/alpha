import { SET_TRAINER } from '../constants/action_types.js';
import data from '../constants/trainer_data.js';
import 'isomorphic-fetch';

export const setTrainer = (trainerData) => { return {type: SET_TRAINER, trainerData}; };

export const getTrainerData = (trainer) => {
  return (dispatch) => {
    fetch('/trainer')
      .then(function (response) {

        console.log('response', response);
        if (response.status >= 400) {
           throw new Error("Bad response from server");
        }
        return response.json();
      })
      .then(function (data) {
        console.log('----', data);
      })
    const trainerData = data.filter(data => {
      return data.instagram === trainer;
    });
    console.log(trainerData);
    dispatch(setTrainer(trainerData));
  }
};
