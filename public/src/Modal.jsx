import React from 'react';
import { NavLink } from 'react-router-dom';

function Modal() {
    return (
        <div className="headee">
            < div className='linkinlink'>
                <button><NavLink to="/episode" style={{ textDecoration: 'none' }} >Episodes</NavLink></button>
                <button><NavLink to="/movie" style={{ textDecoration: 'none' }}>Movies</NavLink></button>
                <button><NavLink to="/premium" style={{ textDecoration: 'none' }}>Premium</NavLink></button>
                <button><NavLink to="upcomings" style={{ textDecoration: 'none' }}>Upcomings</NavLink></button>
                <button><NavLink to="/" style={{ textDecoration: 'none' }}>All💥</NavLink></button>
            </div>

        </div>

    )

}

export default Modal;