import React from 'react';
import {NavLink} from "react-router-dom";
import logo from '../../assets/img/1679724229102.png'
import {AiOutlineClose, AiOutlineMenu} from "react-icons/ai";


const Header = ({setBurger,burger}) => {
    return (
        <header id='header'>
            <div className="container">
                <div className="header">
                    <nav className='header--nav'>
                        <div className='header--nav__logo'>
                            <div>
                                <img src={logo} alt=""/>
                            </div>

                            <p><pre>IK Academy</pre></p>
                        </div>
                        <div className='header--nav__navbar'>
                            <NavLink to={'/'}><pre>Башкы барак</pre></NavLink>
                            <NavLink to={'/about'}><pre>Биз жонундо</pre></NavLink>
                        </div>
                    </nav>
                    <div className='header--btn'>
                        <button><pre>Катталуу</pre></button>
                        <div className='header--btn__menu'>
                            <div style={{transform: burger? 'rotate(360deg)': ''}} onClick={()=> setBurger(!burger)} className='header--btn__menu--icon'>
                                <AiOutlineClose style={{display: burger? '':'none'}}/>
                                <div style={{height: burger? '10px' : ''}}><AiOutlineMenu style={{display: burger? 'none':''}}/></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;