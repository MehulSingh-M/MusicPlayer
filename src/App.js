import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Signin from './components/Signin';
import Home from './components/Home';
import Register from './components/Register';
import Player from './Player';




function App()  {
  
    
  return (
    

    
    <div className="App">
      
        
      <Router>
        <Switch>
          <Route path="/signin">
            <Signin /> 
          </Route>

          <Route path="/Home">
            <Home />
          </Route>

          <Route path="/Register">
            <Register />
          </Route>
          <route path="/player">
            <Player />
          </route>
            
        </Switch>

      </Router>
    
    
      
    
    
    

    </div>
  );
}



export default App;
