import React from 'react';
import { useState } from 'react';
import './incdec.css';

export default function IncDec() {
    const [num,setNum]=useState(0);
  return (
    <div className='main'>
        <div className="container">
            <h1>{num}</h1>
            <br /><br /><br/>
            <button className="inc" onClick={()=>setNum(num+1)}>Increase</button>
            <span>
                <button className="dec" onClick={()=>{
                    num===0?alert("Minimum Limit Reached!") : setNum(num-1)
                    }}
                >Decrease
                </button>
            </span>
        </div>
    </div>
  )
}
