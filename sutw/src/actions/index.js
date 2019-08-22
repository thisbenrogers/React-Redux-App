import axios from 'axios';

export const GET_DATA = 'GET_DATA';
export const FETCHING = 'FETCHING';
export const ERROR = 'ERROR';


export const getData = fields => dispatch => {
    dispatch({ type: FETCHING });
    axios
        .get(`https://api.lyrics.ovh/v1/${fields.artist}/${fields.songTitle}`)
        .then(res => dispatch({ type: GET_DATA, payload: res.data.lyrics }))
        // 
        .catch(err => dispatch({ type: ERROR, payload: err.message }));
}

// dispatch({ type: GET_DATA, payload: res.data.lyrics })