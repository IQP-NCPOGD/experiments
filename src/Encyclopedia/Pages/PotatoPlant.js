import React from 'react';

import '../styles.css';

function PotatoPlant(props) {

    return (
        <div className='main'>
            <h1>Potato Plant</h1>
            <p>This is the page for the potato plant</p>
            <p className="en-link" onClick={props.updateCurrentPage("Home")}>Link back to home page</p>
        </div>
    );
}

export default PotatoPlant;
