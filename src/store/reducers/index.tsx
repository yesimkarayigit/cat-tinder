import { GAME_ACTIONS } from '../constants';

const INITIAL_STATE = {
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

    default:
      return state;
  }
};
