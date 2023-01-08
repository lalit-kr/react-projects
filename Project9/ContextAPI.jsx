import React from 'react'
import { createContext } from 'react';
import CompA from './CompA';

const FirstName= createContext();
const LastName=createContext();
export default function ContextAPI() {
  return (
    <div>
      <FirstName.Provider value={"Monkey D. "}>
        <LastName.Provider value={"Luffy"}>
          <CompA/>
        </LastName.Provider>
      </FirstName.Provider>
    </div>
  )
}
export {FirstName, LastName};
// Breaking the tree ContextAPI -> CompA -> CompB -> CompC
// And accessing ContextAPI -> CompC