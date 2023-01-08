import axios from 'axios';
import React, { useEffect } from 'react';
import {useState} from 'react';
import './pok.css';

const Pok=()=>{
    const [num,setNum]=useState();
    const [name,setName]=useState("");
    const [moves,setMoves]=useState();
    const [ability,setAbility]=useState("");
    const [image,setImage]=useState();
    useEffect(()=>{
        async function getData(){
            const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${num}`);
            setName(res.data.name);
            setMoves(res.data.moves.length);
            setAbility(res.data.abilities[0].ability.name);
            setImage(res.data.sprites.front_default);
        }
        getData();
    });
    return (
        
        <div>
            <h1 className='heading'>Project12</h1>
            <input className='inputField' 
            placeholder='Enter a number between 1 and 898' 
            value={num} onChange={(e)=>setNum(e.target.value)}
            />
            <div className="content">
                {
                    num ? 
                    <>
                    <h1><span style={{color:"red",textTransform:"capitalize"}}>{name}</span></h1> 
                    <h2><span style={{textTransform:"capitalize"}}>{name}</span> has {moves} moves and his ability is 
                    <span style={{color:"red",textTransform:"capitalize"}}> {ability}</span>
                    </h2>
                    <img src={image} alt={name} className="pokImage"/>
                    </>
                    : 
                    null
                }
            </div>
        </div>
    )
}

export default Pok;