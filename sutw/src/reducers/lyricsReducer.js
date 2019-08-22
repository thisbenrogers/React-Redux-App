import { GET_DATA } from '../actions';

const initialState = {
    lyrics: 'Search by Artist and Song Title to view lyrics',
    isLoading: false
}

export const lyricsReducer = (state = initialState, action) => {
    switch(action.type) {
        case GET_DATA:
            console.log("action.payload in GET_DATA reducer: ", action.payload);
            return {
                ...state,
                lyrics: action.payload,
                isLoading: false
            }
        default:
            return state;
    }
}

