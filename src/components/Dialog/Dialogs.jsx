import React from 'react';
import { Link } from 'react-router-dom';

const DialogItem = (props) => {
    let path = "/dialogs/" + props.id;

    return (
        <div> 
            <Link to={path}>{props.name}</Link> 
        </div>
    );
}

const Dialogs = (props) => {
    return (
        <div>
            <DialogItem name="Person1" id="1" />
            <DialogItem name="Person2" id="2" />
        </div>
    );
}

export default Dialogs;