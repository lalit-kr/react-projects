import React from 'react';
import {createContext} from 'react';
import CompA from './CompA';

const FirstName=createContext();
const LastName=createContext();
export default function UseContext() {
  return (
    <div>
        <FirstName.Provider value={"Vinsmoke"}>
            <LastName.Provider value={"Sanji"}>
                <CompA/>
            </LastName.Provider>
        </FirstName.Provider>
    </div>
  )
}
export {FirstName, LastName};
