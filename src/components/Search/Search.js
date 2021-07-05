import React, { useState} from 'react'
import './Search.css'
import {FaPlay} from "react-icons/fa";
import { CardContent } from '@material-ui/core';

const Search = () =>{

    const [search, setSearch] = useState('')
    
    
    return (
        <div className="Search">
            <div className="control">
                <input className="input"  
                    placeholder="Search"
                    onChange = { e => setSearch(e.target.value)}
                />
            </div>   
            
            <div className="MainContent">
                <div className="cardswrap">
                    <div className="card"> 
                        <div className="cardImage">
                            <img src="images\jt.jpg"/>
                            <span className="playIcon">
                            <FaPlay style={{color:'white',margin:'auto',height:'20px'}} />
                            </span>
                        </div>
                        <div className="cardContent">               
                                            
                            <h3>Jagame Thanthiram</h3>
                            
                        </div>               
                    </div> 

                    <div className="card"> 
                        <div className="cardImage">
                            <img src="images\master.jpg"/>
                            <span className="playIcon">
                            <FaPlay style={{color:'white',margin:'auto',height:'20px'}} />
                            </span>
                        </div>
                        <div className="cardContent">               
                                            
                            <h3>Master</h3>
                            
                        </div>               
                    </div> 


                    <div className="card"> 
                        <div className="cardImage">
                            <img src="images\dhoom 3.jpg"  />
                            <span className="playIcon">
                            <FaPlay style={{color:'white',margin:'auto',height:'20px'}} />
                            </span>
                        </div>
                        <div className="cardContent">               
                                            
                            <h3>Dhoom 3</h3>
                            
                        </div>               
                    </div> 

                    <div className="card"> 
                        <div className="cardImage">
                            <img src="images\jt.jpg"/>
                            <span className="playIcon">
                            <FaPlay style={{color:'white',margin:'auto',height:'20px'}} />
                            </span>
                        </div>
                        <div className="cardContent">               
                                            
                            <h3>Jagame Thanthiram</h3>
                            
                        </div>               
                    </div> 


                    <div className="card"> 
                        <div className="cardImage">
                            <img src="images\toofan.jpg"/>
                            <span className="playIcon">
                            <FaPlay style={{color:'white',margin:'auto',height:'20px'}} />
                            </span>
                        </div>
                        <div className="cardContent">               
                                            
                            <h3>Toofan</h3>
                            
                        </div>               
                    </div> 

                    <div className="card"> 
                        <div className="cardImage">
                            <img src="images\kaipoche.jpg"/>
                            <span className="playIcon">
                            <FaPlay style={{color:'white',margin:'auto',height:'20px'}} />
                            </span>
                        </div>
                        <div className="cardContent">               
                                            
                            <h3>Kai Po Che</h3>
                            
                        </div>               
                    </div> 





                </div>
            </div> 
            
            <div className="subContent">
                <div className="cardswrap">
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
                            <img src="images\chhichhore.jpg"  /> 
                        <span className="playIcon">
                            <FaPlay  style={{color:'white',margin:'auto',height:'20px'}} />
                        </span>
                        </div>
                        <div className="cardContent">
                            <h3> chhichhore </h3>
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
                            <img src="images\kgf.jpg"  /> 
                        <span className="playIcon">
                            <FaPlay  style={{color:'white',margin:'auto',height:'20px'}} />
                        </span>
                        </div>
                        <div className="cardContent">
                            <h3> KGF </h3>
                        </div>               
                    </div>





                    
                    <div className="card">
                        <div className="cardImage">                   
                            <img src="images\war.jpg"  /> 
                        <span className="playIcon">
                            <FaPlay  style={{color:'white',margin:'auto',height:'20px'}} />
                        </span>
                        </div>
                        <div className="cardContent">
                            <h3> War </h3>
                        </div>               
                    </div>


                </div>




                  
            </div>
        </div>

            
        
    )
}

export default Search;
