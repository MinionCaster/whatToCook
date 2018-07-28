import React from 'react';
import SingleIngredient from './SingleIngredient/SingleIngredient';

const singleRecipe = props => {

    const ingredients = props.ingredients.map(el => {
        return <SingleIngredient ing={el} />
    })
    return (
        <div>
            <p>{props.title}</p>
            <p>{props.author}</p>
            <img src={props.image} alt={props.title}></img>
            <p>{props.url}</p>
            <ul>
                {ingredients}
            </ul>
        </div>
    )
}

export default singleRecipe;