import React from 'react';
import { NavLink } from 'react-router-dom';
import {PATH} from '../routes/Routes';
import s from './Navbar.module.css'

 const Navbar = () => {
    return (
        <nav className={s.navbar}>
            <div  >
                <NavLink to={PATH.LOGIN} >LOGIN</NavLink>
            </div>
            <div >
                <NavLink to={PATH.PROFILE}>PROFILE</NavLink>
            </div>
            <div>
                <NavLink to={PATH.REGISTRATION}>REGISTRATION</NavLink>
            </div>
            <div>
                <NavLink to= {PATH.TEST_PAGE}>TEST_PAGE</NavLink>
            </div>
        </nav>
    );
};

export default Navbar;