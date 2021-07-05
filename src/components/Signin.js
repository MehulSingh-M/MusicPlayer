import React, {useState, useContext} from 'react';
import './Signin.css';
import { Link, useHistory } from "react-router-dom"
import { FirebaseContext } from "../context/FirebaseContext";


function Signin() {

  const history = useHistory("");
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const { firebase } = useContext(FirebaseContext);

  const login = (event) => {
      event.preventDefault();

      firebase.auth().signInWithEmailAndPassword(email, password).then((auth) => {
        history.push("/home")
      }).catch((e) => {
           if (
             e.message ===
             "The password is invalid. Please check your password."
           
           ) {
             alert("Please check your credentials again")
           } else if (
             e.message ===
             "There is no user record corresponding to this identifier. The user need to be register an account"
           ){
             alert("Please check your credentials again");
           } else {
             alert(e.message);
           }

      })
  }

    return (
        <div className="signin">
          <img 
            src="\images\spotify-logo.jpg" className="login__logo"
          />
          <div className="login__container">
              <h3>Log in to Spotify</h3>
              <form>
                  <center>  
                    <input type="email" placeholder="Email Address" onChange={(e) => setEmail(e.target.value)} />
                  </center>
                  
                  <center>
                    <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
                  </center>

                  <center>
                    <button onClick={login} type="submit" className="login__login">
                        Log In
                    </button>


                  </center>

                  <center>
                    <div className="sideinfo">
                        <h5>Forgotten password ?</h5>
                        <h5 className="dot">.</h5>
                        <Link to ="/register" style={{textDecoration: 'none'}}>
                            <h5 className="rtd">Signup for Spotify</h5>
                        </Link>    
                    
                    </div>
                   </center>

              </form>
              
          </div>  

            
        </div>
    )
}

export default Signin
