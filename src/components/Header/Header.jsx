import React from 'react';
import classes from './Header.module.css';

function Header(){
    return (
        <header className={ classes.header }>
            <h1>It is header!</h1>
        </header>
    );
}
export default Header;