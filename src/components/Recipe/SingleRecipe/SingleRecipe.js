import React from 'react';
import SingleIngredient from './SingleIngredient/SingleIngredient';

const singleRecipe = props => {

    const ingredients = props.ingredients.map((el, index) => {
        return <SingleIngredient ing={el} key={index}/>
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