import React from 'react';
import classes from './Recipe.css';

const recipe = (props) => {
    return (
        <div className={classes.Container}>
            <img className={classes.Pic} src={props.image} alt={props.title}/>
            <div className={classes.Menu}>
            <div className={classes.Title}>{props.title.toUpperCase()}</div>
            <div className={classes.Check} onClick={props.clicked}>Check the recipe!</div>
            </div>
        </div>
        // <div className={classes.Div}>
        //     <p>{props.title}</p>
        //     <img className={classes.Image} src={props.image} alt={props.title} />
        //     <button onClick={props.clicked}> Check out the recipe! </button>
        // </div>
    )
}

export default recipe;