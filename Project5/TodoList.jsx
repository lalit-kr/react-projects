import React from 'react'

export default function TodoList(props) {
  return (
    <div>
        <li>
            <button className='deleteBtn' onClick={()=>props.onSelect(props.id)}>x</button>
            <span>{props.value}</span>
        </li>
    </div>
  )
}
