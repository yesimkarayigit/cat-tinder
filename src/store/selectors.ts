interface RootState {
  time: number;
  breedId: string;
  breeds: [];
  liked: [];
  disliked: [];
  skipped: [];
  isDone: boolean;
}

export const getTime = (state: RootState) => state.time;

export const getBreed = (state: RootState) => state.breedId;

export const getBreeds = (state: RootState) => state.breeds;

export const getLiked = (state: RootState) => state.liked;

export const getDisliked = (state: RootState) => state.disliked;

export const getSkipped = (state: RootState) => state.skipped;

export const getDone = (state: RootState) => state.isDone;
