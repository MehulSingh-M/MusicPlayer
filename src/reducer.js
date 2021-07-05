import musicDB from "./db/music";

export const initialState = {
    playlists: musicDB,
    playing: null,
    search:null
};

const reducer = (state=initialState, action) => {
    switch(action.type) {
            case "SET PLAYLIST":
                return{
                    ...state,
                    playlist: action.payload
                }  
            case "SET_CURRENT_PLAYING":
                return {
                    ...state,
                    playlist: action.payload
                } 
                
            default:
                return state;    
    }
};

export default reducer;