import React from 'react'
import { NavLink } from 'react-router-dom'
import './menu.css';

export default function Menu() {
  return (
    <div>
        <NavLink exact to='/' className='activeClass'>About</NavLink>
        <NavLink exact to='/contact' className='activeClass'>Contact</NavLink>
        <NavLink exact to='/user/Agnamkanan' className='activeClass'>User</NavLink>
        <br />
    </div>
  )
}
