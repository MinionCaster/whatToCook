import React from 'react';
import classes from './Recipe.css';

const recipe = (props) => {
    return (
        <div className={classes.Div}>
            <p className={classes.Title}>{props.title}</p>
            <img className={classes.Image} src={props.image} alt={props.title} />
        </div>
    )
}

export default recipe;