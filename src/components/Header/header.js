import React from 'react';
import {NavLink} from "react-router-dom";
import logo from '../../assets/img/1679724229102.png'


const Header = () => {
    return (
        <header id='header'>
            <div className="container">
                <div className="header">
                    <nav className='header--nav'>
                        <div className='header--nav__logo'>
                            <div>
                                <img src={logo} alt=""/>
                            </div>
                            <p>IK Academy</p>
                        </div>
                        <div className='header--nav__navbar'>
                            <NavLink to={'/'}>Home</NavLink>
                            <NavLink to={'/about'}>About</NavLink>
                            <NavLink to={'/contact'}>Contact</NavLink>
                        </div>
                    </nav>
                    <div className='header--btn'>
                        <button>click</button>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;