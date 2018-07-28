import React from 'react';

import classes from './SearchBox.css';

const searchBox = (props) => {
    return <input className={classes.Input} type="text" onChange={props.change} placeholder="Type your search!"/>
}

export default searchBox;