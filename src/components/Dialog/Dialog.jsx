import React from 'react';
import classes from './Dialog.module.css';

function Dialog(props){
    return (
        <section className={ classes.main }>
            <h1>{props.name}</h1>
        </section> 
    );
}
export default Dialog;