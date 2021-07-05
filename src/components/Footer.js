import React, { useState } from 'react'
import './Footer.css';
import {BiPlayCircle} from "react-icons/bi"
import {BiPauseCircle} from "react-icons/bi"
import SkipPreviousIcon from '@material-ui/icons/SkipPrevious';
import SkipNextIcon from '@material-ui/icons/SkipNext';
import RepeatIcon from '@material-ui/icons/Repeat';
import { Grid, Slider } from '@material-ui/core';
import VolumeDownIcon from '@material-ui/icons/VolumeDown';



const Footer = () => {

  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlayPause = () =>{
    setIsPlaying(!isPlaying);
  }

    return (
        <div className="Footer">
        <div className="footer__left">
          <p>Album and song details</p>
          
        </div>
        <div className="footer__center">
          <div className="range">
            <input type="range"></input>
          </div>
          <SkipPreviousIcon className="footer__icon"/>

          
          <button onClick={togglePlayPause} className="playPause">
            {isPlaying ? <BiPauseCircle/> : <BiPlayCircle/>}
          </button>

          
          <SkipNextIcon className="footer__icon"/>
          <RepeatIcon className="footer__green"/>
        </div>
        <div className="footer__right">
          <Grid container spacing={2}>
            
            <Grid item>
              <VolumeDownIcon />
            </Grid>
            <Grid item xs>
              <Slider/> 
            </Grid>
          
          
          </Grid>
        </div>



      </div>
    )
}

export default Footer
