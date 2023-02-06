import React from 'react';

import '../styles.css';

function EncyclopediaHome(props) {

    return (
            <div className='main'>
                <h1>Encyclopedia Home Page</h1>
                <p>Welcome to the encyclopedia.</p>
                <p>Here is a list of all the current pages:</p>
                    <div class='true-center'>
                        <button class="butt" type="button" onClick={props.update("Potato Plant")}>
                            <img src="../../../../logo192.png" alt="buttonpng" border="0"/>
                        </button>
                        <button class="butt" type="button" onClick={props.update("Food Silo")}>
                            <img src="../../../../logo192.png" alt="buttonpng" border="0"/>
                        </button>
                        <button class="butt" type="button" onClick={props.update("Ammonium Silo")}>
                            <img src="../../../../logo192.png" alt="buttonpng" border="0"/>
                        </button>
                    </div>
                    
            </div> 
    );
}

export default EncyclopediaHome;
