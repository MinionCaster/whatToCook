import React from 'react';

import classes from './SearchButton.css';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

library.add(faSearch);

const searchButton = (props) => {
    return <button className={classes.Button} onClick={props.clicked}><FontAwesomeIcon className={classes.Icon} icon="search" /></button>
}

export default searchButton;