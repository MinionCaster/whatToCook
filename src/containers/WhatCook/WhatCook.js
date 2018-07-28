import React, { Component } from 'react';
import axios from 'axios';

import Recipe from '../../components/Recipe/Recipe';

import Aux from '../../hoc/Aux';
import SearchBox from '../../components/SearchBox/SearchBox';

class WhatCook extends Component {

    constructor(props) {
        super(props);
        this.state = {
            search: '',
            searchResult: null
        };

        this.handleInputChange = this.handleInputChange.bind(this);
    }

    handleInputChange(event) {
        const value = event.target.value;
        this.setState({search: value}, function() {
            console.log(this.state.search);
        });
    }

    async getResults() {
        try {
            const res = await axios(`https://cors-anywhere.herokuapp.com/http://food2fork.com/api/search?key=81646eb51f036c0d182d5177515b52c5&q=${this.state.search}`);
            this.setState({searchResult: res}, function() {
                console.log(this.state.searchResult.data.recipes);
            });
        } catch (error) {
            console.log(error);
        }
    }


    render () {

        let recipeRender = null;
        if (this.state.searchResult != null) {
            recipeRender = this.state.searchResult.data.recipes.map(el => {
                return <Recipe key={el.recipe_id} title={el.title} image={el.image_url} />
            })
        }

        return (
            <Aux>
                <form>
                <SearchBox change={this.handleInputChange} /> 
                </form>
                <button onClick={this.getResults.bind(this)}>Search for recipes!</button>
                {recipeRender}
            </Aux>
        );
    }
}

export default WhatCook;