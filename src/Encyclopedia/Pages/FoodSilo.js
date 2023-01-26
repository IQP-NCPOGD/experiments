import React from 'react';

import '../styles.css';

function FoodSilo(props) {

    return (
        <div className='main'>
            <h1>Food Silo</h1>
            <p>This is the page for the food silo</p>
            <p className="en-link" onClick={props.update("Home")}>Link back to home page</p>
        </div>
    );
}

export default FoodSilo;
