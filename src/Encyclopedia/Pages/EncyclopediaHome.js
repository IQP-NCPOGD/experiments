import React from 'react';

import '../styles.css';

function EncyclopediaHome(props) {

    return (
        <div className='main'>
            <h1>Encyclopedia Home Page</h1>
            <p>Welcome to the encyclopedia.</p>
            <p>Here is a list of all the current pages:</p>
            <ul>
                <li>
                    <span className="en-link" onClick={props.update("Potato Plant")}>Potato Plant</span>
                </li>
                <li>
                    <span className="en-link" onClick={props.update("Food Silo")}>Food Silo</span>
                </li>
                <li>
                    <span className="en-link" onClick={props.update("Ammonium Silo")}>Ammonium Silo</span>
                </li>
            </ul>
        </div>
    );
}

export default EncyclopediaHome;
