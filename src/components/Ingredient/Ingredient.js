import React from 'react';


const Ingredient = (props) => {
    return (
    <div>
        <label>
            {props.ingredient}
            <input type="checkbox" 
            name ={props.ingredient}/> 
        </label>
    </div>
    )      
};

export default Ingredient;