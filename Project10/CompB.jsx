import React, { useContext } from 'react'
import { FirstName, LastName } from './UseContext'

export default function CompB() {
    const fname=useContext(FirstName);
    const lname=useContext(LastName);
  return (
    <div>
        <h1>My Name is {fname} {lname}</h1>
    </div>
  )
}

// Instead of FirstName.Consumer, here we are using useContext to shorten the code and make the program more efficient
