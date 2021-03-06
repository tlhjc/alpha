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
    ]
  }
};

export default function method (state = initialState, action) {
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
