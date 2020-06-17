import React from 'react';
import ReactDOM from 'react-dom';
import Room from './Room';
import './index.css';
import './Starlight.css';
import * as serviceWorker from './serviceWorker';


ReactDOM.render(       //Here, <App/> is a custom tag because it begins with a capital letter.               
  <React.StrictMode>                  
    <Room />                            
  </React.StrictMode>,
  document.getElementById('root')
);    //The way we are calling the App function shows that we are not calling the function. Instead, we are passing 
      //App function into React.createElement() by which we are asking React to call the component function. The ReactDOM.render
      //is basically converted back into pure JS syntax through Babel in the form: React.createElement(<function name>)


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA


serviceWorker.unregister();
