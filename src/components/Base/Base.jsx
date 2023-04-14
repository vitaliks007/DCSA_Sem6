import React from 'react';
import classes from './Base.module.css';
import Dialogs from '../Dialog/Dialogs';

function Base(props){
    return (
        <section className={ classes.main }>
            <Dialogs />
        </section> 
    );
}
export default Base;