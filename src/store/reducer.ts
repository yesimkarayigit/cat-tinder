import { GAME_ACTIONS } from './types';

const INITIAL_STATE = {
  time: null,
  isStarted: false,
  isDone: false,
};

export const reducer = (state = INITIAL_STATE, action: any) => {
  switch (action.type) {
    case GAME_ACTIONS.STARTED:
      return {
        ...state,
        isStarted: action.payload,
      };

    case GAME_ACTIONS.SET_TIME:
      return {
        ...state,
        time: action.payload,
      };

    case GAME_ACTIONS.SET_BREED:
      return {
        ...state,
        breedId: action.payload,
      };

    case GAME_ACTIONS.DONE:
      return {
        ...state,
        isDone: action.payload,
      };

    default:
      return state;
  }
};
