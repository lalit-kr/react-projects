import React, { useState } from 'react'
import './time.css';

export default function Time() {
    let curTime=new Date().toLocaleTimeString();
    const [time,setTime]=useState(curTime);
    
  return (
    <div>
        <h1>Project 2</h1>
        <div className="content">

        <h2>{time}</h2>
        <button onClick={()=>{
            curTime=new Date().toLocaleTimeString();
            setTime(curTime);}}>Get Time</button>
        </div>
    </div>
  )
}
