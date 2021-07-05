import React, { useState, useContext } from "react";
import { Link, useHistory}  from "react-router-dom";
import { FirebaseContext } from "../context/FirebaseContext";
import "./Register.css";


const Register = () => {
  const history = useHistory("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { firebase } = useContext(FirebaseContext);

  return (

    <div className="register">
      <img 
      src="\images\spotify-logo.jpg" className="register__logo"
      />
      
    
    
      
      <form 
        onSubmit={(event) => {
         event.preventDefault(); 
         firebase .auth().createUserWithEmailAndPassword(email, password).then((auth) => {
          history.push("/home")
        })
            
            .catch((error) => alert(error.message));
         setEmail("");
         setPassword("");


        }}>
          
        <div className="register__container">
          <h3>Lets get Signed up !</h3>   
              
            <center>
              
              <input type="Email" placeholder="Email Id"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
              />
            </center>  
        
            <center>
              <input type="password" placeholder="Password"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
              />
            </center>
          
            <center>
      
              <button type="submit">
                  Signup
              </button>
            </center>  
            <center>
         
              <div className="sideinfo2">
                        
                        <Link to ="/signin" style={{textDecoration: 'none'}}>
                            <h5 className="rtd">Already have an account</h5>
                        </Link>    
              </div>        
         
            </center>
        </div>                
      </form>
    
    </div>
  );
};

export default Register;