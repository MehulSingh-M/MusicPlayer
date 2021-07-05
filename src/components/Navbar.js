import React from 'react'
import './Navbar.css';

function Navbar() {
    return (

        <div className="main"> 
            <div className="navbar">

                <div className="header-center">
                    <h1></h1>
                </div>
                <div className="header-right">
                      <button type="submit"> 
                
                         <a href='/register'> SignUp </a>
                
                      </button>
                  
                    <div className="buttonsignin-button">
                        <button type="submit"> 
                
                            <a href='/signin'> SignIn </a>
                
                        </button>
                    </div>
                </div>
          
                
          
            </div>
        </div>    
    )
}



export default Navbar
