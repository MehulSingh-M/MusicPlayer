import React, {useContext} from 'react'
import './Main.css'
import { StoreContext } from './index';
import {FaPlay} from "react-icons/fa";
import Search from './Search/Search';












const Main = ({ children }) => {
    const {state} = useContext(StoreContext)
    const currentPlaylist = state.currentPlaylist
    const songIds = Array.from(state.playlists[currentPlaylist])
    
        
    return (
        <div className="Body" >   
         <div className="Playlist-title"> {currentPlaylist}</div> 
            


         {songIds.length <= 0 ? (
            <p></p>
         ) : (

          <div className= "mainContent">
            <h1> This is awesome</h1>
            <h5>SEE ALL</h5>
              <div className="cardswrap">
                <div className="card"> 
                  <div className="cardImage">
                    <img src="images\jt.jpg"/>
                    <span className="playIcon">
                      <FaPlay style={{color:'white',margin:'auto',height:'20px'}} />
                    </span>
                  </div>
                  <audio id="Pogiren">
                    <source src="songs/Pogiren.mp3" type="audio/mp3"></source>
                  </audio>
                  <div className="cardContent">               
                                       
                    <h3>Jagame Thanthiram</h3>
                    
                  </div>               
                </div>
              

                <div className="card">
                  <div className="cardImage">
                    <img src="https://i2.wp.com/www.socialnews.xyz/wp-content/uploads/2018/11/14/Petta-new-poster-featuring-Simran-and-Rajinikanth-.jpg?quality=90&zoom=1&ssl=1"  />
                    <span className="playIcon">
                      <FaPlay  style={{color:'white',margin:'auto',height:'20px'}} />
                    </span>
                  </div>
                  <div className="cardContent">
                    <h3> Petta </h3>
                  </div>               
                </div>



                <div className="card">
                  <div className="cardImage">
                    <img src="images\war.jpg" />
                    <span className="playIcon">
                      <FaPlay  style={{color:'white',margin:'auto',height:'20px'}} />
                    </span>
                  </div>
                  <div className="cardContent">
                    <h3> War </h3>
                  </div>               
                </div>



                <div className="card">
                  <div className="cardImage">

              
                    <img src="images\2.0.jpg"  />
                    <span className="playIcon">
                      <FaPlay  style={{color:'white',margin:'auto',height:'20px'}} />
                    </span>
                  </div>
                  <div className="cardContent">
                    <h3> 2.0 </h3>
                  </div>               
                </div>


                <div className="card">
                  <div className="cardImage">

                    
                    <img src="images\kgf.jpg"  /> 
                    <span className="playIcon">
                      <FaPlay  style={{color:'white',margin:'auto',height:'20px'}} />
                    </span>
                  </div>
                  <div className="cardContent">
                    <h3> kgf </h3>
                  </div>               
                </div>



                <div className="card">
                  <div className="cardImage">

                    
                    <img src="images\chhichhore.jpg"  /> 
                    <span className="playIcon">
                      <FaPlay  style={{color:'white',margin:'auto',height:'20px'}} />
                    </span>
                  </div>
                  <div className="cardContent">
                    <h3> chhichhore </h3>
                  </div>               
                </div>

                               
                
              </div>   
              

            <h2>Trending Now</h2>

              <div className="cardswrap">
                <div className="card"> 
                  <div className="cardImage">
                    <img src="images\kabirsingh.jpg"/>
                    <span className="playIcon">
                      <FaPlay style={{color:'white',margin:'auto',height:'20px'}} />
                    </span>
                  </div>
                  
                  <div className="cardContent">
                    <h3>Kabir Singh</h3>
                  </div>               
                </div>
              

                <div className="card">
                  <div className="cardImage">
                    <img src="images\darbar.jpg"  />
                    <span className="playIcon">
                      <FaPlay  style={{color:'white',margin:'auto',height:'20px'}} />
                    </span>
                  </div>
                  <div className="cardContent">
                    <h3> Darbar </h3>
                  </div>               
                </div>



                <div className="card">
                  <div className="cardImage">

                    
                    <img src="images\dhoom 3.jpg"  />
                    <span className="playIcon">
                      <FaPlay  style={{color:'white',margin:'auto',height:'20px'}} />
                    </span>
                  </div>
                  <div className="cardContent">
                    <h3> Dhoom 3 </h3>
                  </div>               
                </div>



                <div className="card">
                  <div className="cardImage">
                  
                    <img src="https://i2.wp.com/www.socialnews.xyz/wp-content/uploads/2018/11/14/Petta-new-poster-featuring-Simran-and-Rajinikanth-.jpg?quality=90&zoom=1&ssl=1"  /> 
                    <span className="playIcon">
                      <FaPlay  style={{color:'white',margin:'auto',height:'20px'}} />
                    </span>
                  </div>
                  <div className="cardContent">
                    <h3> Petta </h3>
                  </div>               
                </div>


                <div className="card">
                  <div className="cardImage">

                   
                    <img src="images\toofan.jpg"  /> 
                    <span className="playIcon">
                      <FaPlay  style={{color:'white',margin:'auto',height:'20px'}} />
                    </span>
                  </div>
                  <div className="cardContent">
                    <h3> Toofan </h3>
                  </div>               
                </div>



                <div className="card">
                  <div className="cardImage">

                    
                    <img src="images\master.jpg"  /> 
                    <span className="playIcon">
                      <FaPlay  style={{color:'white',margin:'auto',height:'20px'}} />
                    </span>
                  </div>
                  <div className="cardContent">
                    <h3> Master </h3>
                  </div>               
                </div>

                               
                
              </div>  
            
            
            
          </div>

          

          )}

          

          <div className="subContent">

            <div className="Search">
              
              <Search />

                                

            </div>
          
          
          
          </div>
         
          
         
        </div>

        
    )

    

}
export default Main

