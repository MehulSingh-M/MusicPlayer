import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import Home from './components/Home';
import { FirebaseContext } from './context/FirebaseContext';
import { firebase } from "./config/firebase";




ReactDOM.render(
  <React.StrictMode>
      
    <FirebaseContext.Provider value={{ firebase }}>    
    
        <App />
      
    </FirebaseContext.Provider>
    
  </React.StrictMode>,
  document.getElementById('root')
);

