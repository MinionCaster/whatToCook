import React, { Component } from 'react';
import axios from 'axios';

import Ingredient from '../../components/Ingredient/Ingredient';
import Recipe from '../../components/Recipe/Recipe';

import Aux from '../../hoc/Aux';

class WhatCook extends Component {

    constructor(props) {
        super(props);
        this.state = {
            ingredients: [],
            searchResult: null
        };

        this.handleInputChange = this.handleInputChange.bind(this);
    }

    handleInputChange(event) {
        const target = event.target;
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

    async getResults() {
        try {
            let ings = this.state.ingredients.join();
            const res = await axios(`https://cors-anywhere.herokuapp.com/http://food2fork.com/api/search?key=81646eb51f036c0d182d5177515b52c5&q=${ings}`);
            this.setState({searchResult: res}, function() {
                console.log(this.state.searchResult.data.recipes);
            });
        } catch (error) {
            console.log(error);
        }
    }


    render () {

        const list = ['Meat', 'Cheese', 'Pasta', 'Tomatoes'];
        let listRender = list.map((el, index) => {
          return <Ingredient key={index} ingredient={el} change={this.handleInputChange}/>
        })

        let recipeRender = null;
        if (this.state.searchResult != null) {
            recipeRender = this.state.searchResult.data.recipes.map(el => {
                return <Recipe key={el.recipe_id} title={el.title} image={el.image_url} />
            })
        }

        return (
            <Aux>
                <form>
                {listRender}
                </form>
                <button onClick={this.getResults.bind(this)}>Search for recipes!</button>
                {recipeRender}
            </Aux>
        );
    }
}

export default WhatCook;