import React from 'react';
import { useState } from 'react';
import './todo.css';
import TodoList from './TodoList';

export default function Todo() {

    const [inputData,setInputData]=useState("");
    const [list,setList]=useState([]);

    const todoItems=(e)=>{
        setInputData(e.target.value);
    }
    const addValues=()=>{
        setList((prevValues)=>{
            return [...prevValues,inputData]; 
        })
        setInputData("");
    }
    const deleteItem=(id)=>{
        setList((prevValues)=>{
            return prevValues.filter((element,index)=>{
                return id!==index;
            })
        })
    }
    
  return (
    <div className='todo'>
        <div className="todoContainer">
            <h1>Zoro's Todo List</h1>
            <br />
            <input type="text" placeholder='Add Item' value={inputData} className='todoInput' onChange={todoItems} />
            <button className='addBtn' type='submit' onClick={addValues}> + </button>
            <br /><br />
            <ol>
                {list.map((value,index)=>{
                    return (
                        <TodoList 
                        key={index}
                        id={index}
                        value={value}
                        onSelect={deleteItem}
                        />
                    )
                })}
            </ol>

        </div>

    </div>
  )
}
