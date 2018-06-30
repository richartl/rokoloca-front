import axios from 'axios';
import { createAction } from 'redux-actions'

export const ON_REQUEST_PLAYLIST = 'ON_REQUEST_PLAYLIST';
export const ON_SUCCESS_PLAYLIST = 'ON_SUCCESS_PLAYLIST';
export const ON_FAILURE_PLAYLIST = 'ON_FAILURE_PLAYLIST';

const requestPlaylist = createAction('ON_REQUEST_PLAYLIST');
const receivePlaylist = createAction('ON_SUCCESS_PLAYLIST');
const failurePlaylist = createAction('ON_FAILURE_PLAYLIST');

export const fetchPlaylist = (uuid) => dispatch => {
  dispatch(requestPlaylist());
  return axios
    .get(`/playlists/${uuid}`)
    .then(response => {
      dispatch(receivePlaylist(response.data));
    })
    .catch(error => {
      dispatch(failurePlaylist(error));
    });
}
