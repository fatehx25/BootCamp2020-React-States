import React, { useState } from 'react';
import EmojiObjectsTwoToneIcon from '@material-ui/icons/EmojiObjectsTwoTone';
import Fab from '@material-ui/core/Fab';
import FlareIcon from '@material-ui/icons/Flare';
import './App.css';

//React is responsible for calling the components. It uses an array behind the scene to keep track of the initial value and the changes
//in the value of the state by recognizing which components call useState and which hooks are called.


//This is a plain JS function, App. What makes this function a React component is
//the fact that this function can return something which React can render.
function Room() {
  let [isLit, setLit] = useState(false); //The useState is known as hook: a state holding lightswitch value
                                        //The above returns a variable with state value and a function to change the state value

  let [isCold, setTemp] = useState(11);                                     
  return (                            
    <div className={`${isLit ? "body" : "body2"}`}>      
      <p className="App right">GOOD {isLit ? 'MORNING' : 'NIGHT'}!</p> 

      <p className="App2 left">{isCold} °C</p>

      <button onClick={()=> (setLit(!isLit))} className="button button2:hover">
        <EmojiObjectsTwoToneIcon />
      </button>

      <Fab onClick={()=> {isLit? setTemp(++isCold): setTemp(--isCold)}} variant="extended" className="fab">
        Temperature
      </Fab>


      <div className="star-header1">
        <FlareIcon style={{ fontSize: 10 }}/>
      </div>

      
      <div className="star-header2">
        <FlareIcon style={{ fontSize: 10 }}/>
      </div>

      
      <div className="star-header3">
        <FlareIcon style={{ fontSize: 10 }}/>
      </div>

      
      <div className="star-header4">
        <FlareIcon style={{ fontSize: 10 }}/>
      </div>

      
      <div className="star-header5">
        <FlareIcon style={{ fontSize: 10 }}/>
      </div>

      
      <div className="star-header6">
        <FlareIcon style={{ fontSize: 10 }}/>
      </div>

      
      <div className="star-header7">
        <FlareIcon style={{ fontSize: 10 }}/>
      </div>

      
      <div className="star-header8">
        <FlareIcon style={{ fontSize: 10 }}/>
      </div>

      
      <div className="star-header9">
        <FlareIcon style={{ fontSize: 10 }}/>
      </div>

      
      <div className="star-header10">
        <FlareIcon style={{ fontSize: 10 }}/>
      </div>

      
      <div className="star-header11">
        <FlareIcon style={{ fontSize: 10 }}/>
      </div>

      
      <div className="star-header12">
        <FlareIcon style={{ fontSize: 10 }}/>
      </div>

      
      <div className="star-header13">
        <FlareIcon style={{ fontSize: 10 }}/>
      </div>
      
      <div className="star-header14">
        <FlareIcon style={{ fontSize: 10 }}/>
      </div>

      
      <div className="star-header15">
        <FlareIcon style={{ fontSize: 10 }}/>
      </div>

      
      <div className="star-header16">
        <FlareIcon style={{ fontSize: 10 }}/>
      </div>

      
      <div className="star-header17">
        <FlareIcon style={{ fontSize: 10 }}/>
      </div>

      
      <div className="star-header18">
        <FlareIcon style={{ fontSize: 10 }}/>
      </div>

      
      <div className="star-header19">
        <FlareIcon style={{ fontSize: 10 }}/>
      </div>

      
      <div className="star-header20">
        <FlareIcon style={{ fontSize: 10 }}/>
      </div>

      
      <div className="star-header21">
        <FlareIcon style={{ fontSize: 10 }}/>
      </div>

      
      <div className="star-header22">
        <FlareIcon style={{ fontSize: 10 }}/>
      </div>

      <div>
        <img src="https://pluspng.com/img-png/mountain-range-png-hd-mountain-png-mountain-png-png-hd-mountain-range-1900.png" alt="landscape" style={{ height:1000, width:1520, position:"absolute", bottom:-500}} />
      </div>
      
      <p className="final">MADE WITH 💖 BY FATEH GOLANI</p>

    </div> 
  );
} 



export default Room;
