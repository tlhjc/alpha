'use strict';

import {
  SET_TRAINING_METHOD
} from '../constants/action_types';

export const initialState = {
  methodInView: {
    name: '',
    trainers: [
      {
        name: '',
        followers: '',
        twitter: '',
        videos: [
          {
            url: '',
            tags: [
              ''
            ]
          }
        ]
      }
    ]
  }
};

export default function home (state = initialState, action) {
  switch (action.type) {
    case SET_TRAINING_METHOD:
      return {
        ...state,
        methodInView: action.methodData
      }
    default:
      return state;
  }
}
