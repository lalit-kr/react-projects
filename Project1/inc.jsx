import React, { useState } from 'react'
import './inc.css';

export default function Inc() {
    const [num,setNum]=useState(0);
  return (
    <div>
        <h1>Project 1</h1>
        <div className="content">

        <h2>{num}</h2>
        <button onClick={()=>{setNum(num+1)}}>Click Me</button>
        </div>
    </div>
  )
}
