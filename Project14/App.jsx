import React from 'react';
import { Routes, Route } from 'react-router-dom';
import About from './About';
import Contact from './Contact';
import Error from './Error';
import Menu from './Menu';
import User from './User';

const App=()=>{
    return(
        <div>
            <Menu/>
            <Routes>
                <Route exact path='/' element={<About/>}/>
                <Route path='/contact' element={<Contact/>}/>
                <Route path='/user/:name' element={<User/>}/>
                <Route element={<Error/>}/>
            </Routes>
        </div>
    )
}

export default App;