import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import Modal from './Modal';

function Header() {
    const[Check, setCheck] = useState(true);
    const [Head, setHead] = useState("");
    const [Arrow, setArrow] = useState("⬅");
    function allLink(){
        if(Check === true){
            setHead(Modal);
            setCheck(false);
            setArrow("➡")
        }else{
            setHead(" ");
            setCheck(true);
            setArrow("⬅")
        }
    }
    return (
        <>
            <div className="header">
                <div className="header_left">
                    <div id="logo">
                        <img src='https://sites.google.com/site/noeyiizsc/nobita-nobi/Nobita-Doraemon4.jpg?attredirects=0' alt='logo' />
                    </div>
                    <h1 className="brand_name">Nostar</h1>
                    <button><NavLink to="/episode" style={{ textDecoration: 'none' }} >Episodes</NavLink></button>
                    <button><NavLink to="/movie" style={{ textDecoration: 'none' }}>Movies</NavLink></button>
                    <button><NavLink  to="/premium" style={{ textDecoration: 'none' }}>Premium</NavLink></button>
                    <button><NavLink to="upcomings" style={{ textDecoration: 'none' }}>Upcomings</NavLink></button>
                </div>
                {<div className="header_right">
                    <form>
                        <NavLink to="/" style={{ textDecoration: 'none' }}>All💥</NavLink>
                        <input type="text" placeholder='search'></input>
                    </form>
                </div>}
                {Head}
                <div className="dropdown">
                    <span id='dropdownid'  onClick={allLink}>{Arrow}</span>
                </div>
                
            </div>

        </>
    )
}
export default Header;