import React from 'react';
import {Fraction} from 'fractional';

/* eslint no-eval: 0 */

const formatCount = count => {
    if (count) {
        const newCount = Math.round(count * 100) / 100;
        const [int, dec] = newCount.toString().split('.').map(el => parseInt(el, 10));

        if (!dec) return newCount;

        if (int === 0) {
            const fr = new Fraction(newCount);
            return `${fr.numerator}/${fr.denominator}`;
        } else {
            const fr = new Fraction(newCount - int);
            return `${int} ${fr.numerator}/${fr.denominator}`
        }
    } 
    return '';
}

const singleIngredient = (props) => {

    const parseIngredients = (ingredient) => {
        const unitNormalizationArray = [
            ['tablespoon', 'tbsp'],
            ['tablespoons', 'tbsp'],
            ['tbsps', 'tbsp'],
            ['teaspoon', 'tsp'],
            ['teaspoons', 'tsp'],
            ['tsps', 'tsp'],
            ['ounce', 'oz'],
            ['ounces', 'oz'],
            ['cups', 'cup'],
            ['pound', 'lb'],
            ['pounds', 'lb'],
            ['lbs', 'lb'],
            ['kg', 'kg'],
            ['kgs', 'kg'],
            ['kilogram', 'kg'],
            ['kilograms', 'kg'],
            ['g', 'g'],
            ['grams', 'g'],
            ['gram', 'g']
        ];
    const unitTable = new Map(unitNormalizationArray);
        //1 uniform units
    ingredient = ingredient.toLowerCase();
    unitTable.forEach((value, key) => {
        ingredient = ingredient.replace(key, value);
      });
    //2 remove parentheses
    ingredient = ingredient.replace(/ *\([^)]*\), */g, ', ');
    ingredient = ingredient.replace(/ *\([^)]*\) */g, ' ');

    // parse ingredients into count, unit, ingredient
    const arrIng = ingredient.split(' ');
    const unitSet = new Set(unitTable.values());
    const unitIndex = arrIng.findIndex(str => unitSet.has(str));

    let objIng;
        if (unitIndex > -1) {
            // there is a unit
            const arrCount = arrIng.slice(0, unitIndex);
            let count;
            if (arrCount.length === 1) {
                count = eval(arrIng[0].replace('-', '+'));
            } else {
                // eval(4 + 1/2) ---> 4.5
                count = eval(arrIng.slice(0, unitIndex).join('+'));
            }

            objIng = {
                count: Math.round(count * 100) / 100,
                unit: arrIng[unitIndex],
                ingredient: arrIng.slice(unitIndex + 1).join(' ')
            }

        } else if (parseInt(arrIng[0], 10) ){
            objIng = {
                count: parseInt(arrIng[0], 10),
                unit: '',
                ingredient: arrIng.slice(1).join(' ')
            }

            //there is no unit but 1st element 
        } else if (unitIndex === -1) {
            //there is no unit and no number in 1st
            objIng = {
                count: 1,
                unit: '',
                ingredient 
            }
        }
        return objIng;
    }

    let ing = parseIngredients(props.ing);
    ing.count = formatCount(ing.count);
    return (
        <ul>
            {ing.count}
            {ing.unit} 
            {ing.ingredient} 
        </ul>
    )
}

export default singleIngredient;