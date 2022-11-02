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

export const setBreeds = (breeds: []) => {
  return { type: GAME_ACTIONS.SET_BREEDS, payload: breeds };
};

export const finishGame = (done: boolean) => {
  return { type: GAME_ACTIONS.DONE, payload: done };
};

export const setLiked = (liked: string) => {
  return { type: GAME_ACTIONS.SET_LIKED, payload: liked };
};

export const setDisliked = (disliked: string) => {
  return { type: GAME_ACTIONS.SET_DISLIKED, payload: disliked };
};

export const setSkipped = (skipped: string) => {
  return { type: GAME_ACTIONS.SET_SKIPPED, payload: skipped };
};
