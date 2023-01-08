import React from 'react'
import {questions} from './api';
import Myaccord from './myaccord';
import './accordian.css';

export default function Accordion() {

    const data=questions;

  return (
    <div>
        <h1>Project 7</h1>
            <section className='mainDiv'>
                {
                    data.map((val)=>{
                        return <Myaccord key={val.id} {...val}/>
                        
                    })
                }
            </section>
    </div>
  )
}
