import React from 'react';
import classes from './Header.module.css';
import { Link } from 'react-router-dom';

function Header(){
    return (
        <header className={ classes.header }>
            <div className= { classes.menu }>
                <Link to="/">Главная</Link>
            </div>
        </header>
    );
}
export default Header;