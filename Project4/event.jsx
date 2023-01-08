import React, { useState } from 'react'
import './event.css';

export default function Event() {
    const color=[0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F'];
    const [bg,setBg]=useState('');
    function changeBg () {
        let hex='#';
        for(let i=0;i<6;i++){
            hex+=color[getRandom()];
        }
        // document.body.style.backgroundColor=hex;
        setBg(hex);

    }
    function getRandom(){
        return Math.floor(Math.random()*16);
    }
  return (
    <div style={{backgroundColor:bg}}>
        <h1>Project 4</h1>
        <div className="content">
            <h2>Background Color : {bg}</h2>
            <button onClick={changeBg}>Click Me</button>
        </div>
    </div>
  )
}
