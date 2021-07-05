import React, {useReducer, createContext} from 'react'
import { css } from '@emotion/react'
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import Footer from './Footer';
import Main from './Main';
import media from '../media.json';





export const StoreContext = createContext(null)

const DEFAULT_PLAYLIST = "home" 

const initialState = {
  currentPlaylist: DEFAULT_PLAYLIST,
  media,
  playlists: {
    home: new Set(media.ids),
    search: new Set()
    
  },
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'ADD_PLAYLIST':
      return {
        ...state,
         playlists: { ...state.playlists, [action.playlist]: new Set() }
      }
    case 'SET_PLAYLIST':
      return  { ...state, currentPlaylist: action.playlist}

    
  }
  return state
}



const MusicPlayer = () => {
  const [state, dispatch] = useReducer(reducer, initialState)

  return (
    <StoreContext.Provider value ={{state, dispatch}}>
     <div  css={CSS}>    
        <Navbar/>
        <Sidebar />
        <Main />
        <Footer />
        
      
      </div>
      
    </StoreContext.Provider>
  )
}

const CSS = css`
  height: 100%;
  width: 100%;
  display: flex;
  position: realtive;
  color: white;

`

export default MusicPlayer
