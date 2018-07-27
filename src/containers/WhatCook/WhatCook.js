import React, { Component } from 'react';
import Ingredient from '../../components/Ingredient/Ingredient';

import Aux from '../../hoc/Aux';

class WhatCook extends Component {
    render () {

        const list = ['Meat', 'Cheese', 'Pasta', 'Tomatoes'];
        let listRender = list.map(el => {
          return <Ingredient ingredient={el} />
        })

        return (
            <Aux>
                {listRender}
                <div>List of recipes</div>
            </Aux>
        );
    }
}

export default WhatCook;