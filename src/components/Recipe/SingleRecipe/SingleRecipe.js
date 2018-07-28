import React from 'react';

const singleRecipe = props => {
    return (
        <div>
            <p>{props.title}</p>
            <p>{props.author}</p>
            <img src={props.image} alt={props.title}></img>
            <p>{props.url}</p>
            <p>{props.ingredients}</p>
        </div>
    )
}

export default singleRecipe;