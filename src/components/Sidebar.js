import React, { useState, useRef, useContext } from 'react'
import './Sidebar.css'
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import { StoreContext } from './index'
import Modal from './Modal';



const Sidebar = () => {
    const [sidebarState, setState] = useState({
     
        modal: false
        
    })

    const { state, dispatch } = useContext(StoreContext)

    const playlistRef = useRef(null)
    const playlists = Object.keys(state.playlists)

    const addPlaylist = e=> {
        e.preventDefault()
        const list = playlistRef.current.value

        dispatch({ type: 'ADD_PLAYLIST', playlist: list})

        setState({
            ...state,
            modal: false,
            playlists: { ...state.playlists, [list]: new Set()}
            
            
        })
    }

const handleModal = () => setState({...sidebarState, modal: !sidebarState.model})

    return(
        <ul className="sidebar">
            <img src="\images\Spotify_Logo_RGB_White.png" />

            {playlists.map(list => 
                <h3 key={list} className={list === state.currentPlaylist ? 'active' : ''}
                    onClick={() => {
                        dispatch({ type: 'SET_PLAYLIST', playlist: list})


                    }}

                >{list}</h3>)                    
            }  
            
            <div className="new-playlist" onClick={() => {
                setState({ ...state, modal: true })
            }}>
                <AddCircleOutlineIcon className="add__icon" />
                <span>New Playlist</span>

            </div>

            <Modal show={sidebarState.modal} 
                close={() => {
                    setState({ ...state, modal: false })
                }}
            >    
               <form onSubmit={addPlaylist}>
                    <div className="title">New Playlist</div>
                    <div className="content-wrap">
                        <input type="text" placeholder="Type Your Playlist Name" required ref={playlistRef} />
                        
                        <br/>
                        <button type="submit">Create Playlist</button> 
                    </div>
                </form>

            </Modal>
        
        </ul>
    )

}

export default Sidebar