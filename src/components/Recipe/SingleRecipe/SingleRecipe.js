import React from 'react';
import SingleIngredient from './SingleIngredient/SingleIngredient';

import classes from './SingleRecipe.css';

const singleRecipe = props => {

    const ingredients = props.ingredients.map((el, index) => {
        return <SingleIngredient ing={el} key={index}/>
    })
    return (
        <div className={classes.Container}>
            <p>{props.title}</p>
            <img className = {classes.Image}src={props.image} alt={props.title}></img>
            <p>{props.author}</p>
            <ul>
                {ingredients}
            </ul>
            <p>{props.url}</p>
        </div>
    )
}

export default singleRecipe;