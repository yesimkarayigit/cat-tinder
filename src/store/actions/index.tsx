import { GAME_ACTIONS } from '../constants';

export const startGame = (started: boolean) => {
  return { type: GAME_ACTIONS.STARTED, payload: started };
};
