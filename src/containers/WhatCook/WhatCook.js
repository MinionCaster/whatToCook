import React, { Component } from 'react';
import Ingredient from '../../components/Ingredient/Ingredient';

import Aux from '../../hoc/Aux';

class WhatCook extends Component {

    constructor(props) {
        super(props);
        this.state = {
            ingredients: []
        };

        this.handleInputChange = this.handleInputChange.bind(this);
    }

    handleInputChange(event) {
        const target = event.target;
        //const value = target.type === 'chekbox' ? target.checked : target.value;
        const name = target.name;

        if (!this.state.ingredients.includes(name)) {
            let stateCopy = [...this.state.ingredients];
            stateCopy.push(name);
            this.setState({ingredients: stateCopy}, function() {
                console.log(this.state.ingredients);
            });
        } else {
            let stateCopy = [...this.state.ingredients];
            const index = stateCopy.indexOf(name);
            if (index > -1) {
                stateCopy.splice(index, 1);
            }
            this.setState({ingredients: stateCopy}, function() {
                console.log(this.state.ingredients);
            });
        }
    }

    render () {

        const list = ['Meat', 'Cheese', 'Pasta', 'Tomatoes'];
        let listRender = list.map(el => {
          return <Ingredient ingredient={el} change={this.handleInputChange}/>
        })

        return (
            <Aux>
                <form>
                {listRender}
                </form>
                <div>List of recipes</div>
            </Aux>
        );
    }
}

export default WhatCook;