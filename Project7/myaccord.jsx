import React from 'react';
import { useState } from 'react';
import './accordian.css';

export default function Myaccord({question,answer}) {

    const [show,setShow]=useState(false);

  return (
    <div className='container'>
        <div className="content">
            <div className="mainHeading">
            <h3>{question}</h3>
                <span>
                    <p className='ques' onClick={()=>setShow(!show)}>{show ? "➖" : "➕"}</p>
                </span>
            </div>
            {   show && <p className='ans'>{answer}</p>}
        </div>
    </div>

  )
}
