import React, {useState} from 'react';
import {NavLink} from "react-router-dom";

const Burger = ({setBurger,burger}) => {
    return (
        <div style={{ display: burger? '' : 'none'}} className='burger'>
            <div className="burger--menu">
                <NavLink onClick={()=> setBurger(!burger)} to={'/'}>Башкы барак</NavLink>
                <NavLink onClick={()=> setBurger(!burger)} to={'/about'}>Биз жонундо</NavLink>
                <NavLink onClick={()=> setBurger(!burger)} to={''}>Катталуу</NavLink>
            </div>
        </div>
    );
};

export default Burger;