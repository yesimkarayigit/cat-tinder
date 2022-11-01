import { GAME_ACTIONS } from './types';

export const startGame = (started: boolean) => {
  return { type: GAME_ACTIONS.STARTED, payload: started };
};

export const setTime = (time: string) => {
  return { type: GAME_ACTIONS.SET_TIME, payload: time };
};

export const setBreed = (breedId: string) => {
  return { type: GAME_ACTIONS.SET_BREED, payload: breedId };
};

export const finishGame = (done: boolean) => {
  return { type: GAME_ACTIONS.DONE, payload: done };
};
