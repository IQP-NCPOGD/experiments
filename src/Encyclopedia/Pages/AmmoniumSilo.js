import React from 'react';

import '../styles.css';

function AmmoniumSilo(props) {

    return (
        <div className='main'>
            <h1>Ammonium Silo</h1>
            <p>This is the page for the ammonium silo</p>
            <p className="en-link" onClick={props.update("Home")}>Link back to home page</p>
        </div>
    );
}

export default AmmoniumSilo;
