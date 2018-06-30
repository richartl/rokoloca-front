import {
  ON_REQUEST_PLAYLIST,
  ON_SUCCESS_PLAYLIST,
  ON_FAILURE_PLAYLIST
} from '../actions/playlists';

const initialState = {
  isFetching: true,
  error: null,
  current_playlist: null
};

export const playlists = (state = initialState, action) => {
  switch (action.type) {
    case ON_REQUEST_PLAYLIST:
      return {
        ...state,
        isFetching: true,
      };
    case ON_SUCCESS_PLAYLIST:
      return {
        ...state,
        isFetching: false,
        current_playlist: action.payload
      };
    case ON_FAILURE_PLAYLIST:
      return {
        ...state,
        isFetching: false,
        error: action.payload
      };
    default:
      return state;
  }
}
