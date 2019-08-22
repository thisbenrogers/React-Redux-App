import { GET_DATA, FETCHING, ERROR } from '../actions';

const initialState = {
    lyrics: 'Search by Artist and Song Title to view lyrics',
    isLoading: false,
    failed: false
}

export const lyricsReducer = (state = initialState, action) => {
    switch(action.type) {
        case FETCHING:
            return {
                ...state,
                isLoading: true,
                failed: false
            }
        case GET_DATA:
            console.log("action.payload in GET_DATA reducer: ", action.payload);
            return {
                ...state,
                lyrics: action.payload,
                isLoading: false,
                failed: false
            }
        case ERROR:
            return {
                ...state,
                lyrics: action.payload,
                isLoading: false,
                failed: true
            }
        default:
            return state;
    }
}

