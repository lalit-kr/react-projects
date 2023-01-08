import React, { useState } from 'react'
import './clock.css';

export default function Clock() {
    let curTime=new Date().toLocaleTimeString();
    const [time,setTime]=useState(curTime);
    const updateTime=()=>{
        curTime=new Date().toLocaleTimeString();
        setTime(curTime);
    }
    setInterval(updateTime,1000);
  return (
    <div>
        <h1>Project 3</h1>
        <div className="content">
            <h2>{time}</h2>
        </div>
    </div>
  )
}
