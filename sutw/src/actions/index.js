import axios from 'axios';

export const GET_DATA = 'GET_DATA';

export const getData = fields => dispatch => {
    
    axios
        .get(`https://api.lyrics.ovh/v1/${fields.artist}/${fields.songTitle}`)
        .then(res => dispatch({ type: GET_DATA, payload: res.data.lyrics }))
        // 
        .catch(err => console.error(err));
}