'use strict';

import {
  SET_TRAINER
} from '../constants/action_types';

export const initialState = {
  trainerInView: {
    name: '',
    followers: '',
    twitter: '',
    imageUrl: '',
    videos: [
      {
        url: '',
        tags: [
          ''
        ]
      }
    ]
  }
};

export default function trainer (state = initialState, action) {
  switch (action.type) {
    case SET_TRAINER:
      return {
        ...state,
        trainerInView: action.trainerData
      }
    default:
      return state;
  }
}
