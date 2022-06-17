import React from 'react';
import Header from './Header'
import { Routes, Route} from 'react-router-dom';
import Home from './Home';
import Upcomings from './Upcomings';
import Episodes from './Episode';
import Movies from './Movies';
import Premium from './Premium'

function Nostar() {
    return (
        <>
            { <div className="nostar">
                <Header />
            </div> }

            { <Routes >
                <Route exact path='/' element={<Home/>}/> 
                <Route exact path='/episode' element={<Episodes/>}/> 
                <Route exact path='/movie' element={<Movies/>}/> 
                <Route exact path='/premium' element={<Premium/>}/>
                <Route exact path='/upcomings' element={<Upcomings/>}/> 
            </Routes> }
        </>
    )
}

export default Nostar;