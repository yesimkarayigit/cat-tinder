import { GAME_ACTIONS } from './types';

const INITIAL_STATE = {
  time: 0,
  isStarted: false,
  isDone: false,
  breedId: 'abys',
  liked: [],
  disliked: [],
  skipped: [],
  breeds: [],
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

    case GAME_ACTIONS.SET_BREEDS:
      return {
        ...state,
        breeds: action.payload,
      };

    case GAME_ACTIONS.DONE:
      return {
        ...state,
        isDone: action.payload,
      };

    case GAME_ACTIONS.SET_LIKED:
      return {
        ...state,
        liked: state.liked.concat(action.payload),
      };

    case GAME_ACTIONS.SET_DISLIKED:
      return {
        ...state,
        disliked: state.disliked.concat(action.payload),
      };

    case GAME_ACTIONS.SET_SKIPPED:
      return {
        ...state,
        skipped: state.skipped.concat(action.payload),
      };

    case GAME_ACTIONS.CLEAR_LIKED:
      return {
        ...state,
        liked: INITIAL_STATE.liked,
      };

    case GAME_ACTIONS.CLEAR_DISLIKED:
      return {
        ...state,
        disliked: INITIAL_STATE.disliked,
      };

    case GAME_ACTIONS.CLEAR_SKIPPED:
      return {
        ...state,
        skipped: INITIAL_STATE.skipped,
      };

    default:
      return state;
  }
};
