import React from 'react';
import classes from './Recipe.css';

const recipe = (props) => {
    return (
        <div className={classes.Div}>
            <p>{props.title}</p>
            <img className={classes.Image} src={props.image} alt={props.title} />
            <button onClick={props.clicked}> Check out the recipe! </button>
        </div>
    )
}

export default recipe;