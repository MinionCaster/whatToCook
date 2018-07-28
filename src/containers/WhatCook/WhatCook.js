import React, { Component } from 'react';
import axios from 'axios';

import Aux from '../../hoc/Aux';
import Recipe from '../../components/Recipe/Recipe';
import SearchBox from '../../components/SearchBox/SearchBox';
import Modal from '../../components/UI/Modal/Modal';

import classes from './WhatCook.css';

class WhatCook extends Component {

    constructor(props) {
        super(props);
        this.state = {
            search: '',
            searchResult: null,
            recipeClicked: false
        };

        this.handleInputChange = this.handleInputChange.bind(this);
    }

    handleInputChange(event) {
        const value = event.target.value;
        this.setState({search: value}, function() {
            console.log(this.state.search);
        });
    }

    async getResults(event) {
        event.preventDefault();
        try {
            const res = await axios(`https://cors-anywhere.herokuapp.com/http://food2fork.com/api/search?key=81646eb51f036c0d182d5177515b52c5&q=${this.state.search}`);
            this.setState({searchResult: res}, function() {
                console.log(this.state.searchResult.data.recipes);
            });
        } catch (error) {
            console.log(error);
        }
    }

    recipeClickedHandler() {
        this.setState({recipeClicked: true})
    }

    recipeCancelHandler() {
        this.setState({recipeClicked: false})
    }



    render () {

        const limitRecipeTitle = (title, limit = 30) => {
            return title.length > limit ? title.substring(0, title.substring(0, limit).lastIndexOf(' ')) + '...': title;
        }

        let recipeRender = null;
        if (this.state.searchResult != null) {
            recipeRender = this.state.searchResult.data.recipes.map(el => {
                return <Recipe key={el.recipe_id} title={limitRecipeTitle(el.title)} image={el.image_url} clicked={this.recipeClickedHandler.bind(this)}/>
            })
        }

        return (
            <Aux>
                
                <Modal show={this.state.recipeClicked} modalClosed={this.recipeCancelHandler.bind(this)}>
                </Modal>
                <form onSubmit={this.getResults.bind(this)}>
                    <SearchBox change={this.handleInputChange} /> 
                </form>
                <button onClick={this.getResults.bind(this)}>Search for recipes!</button>
                <div className={classes.Flex}>
                    {recipeRender}
                </div>
            </Aux>
        );
    }
}

export default WhatCook;