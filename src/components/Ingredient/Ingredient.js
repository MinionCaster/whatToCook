import React from 'react';


const Ingredient = (props) => {
    return (
    <div>
        <label>
            {props.ingredient}
            <input type="checkbox" 
            name ={props.ingredient}
            onChange={props.change}/> 
        </label>
    </div>
    )      
};

export default Ingredient;