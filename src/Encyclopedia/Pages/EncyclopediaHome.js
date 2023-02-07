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
                            <div class='banner'>
                                <h4>Potato Plant</h4>
                            </div> 
                            <img src="../../../../logo192.png" alt="buttonpng" border="0"/>
                        </button>
                        <button class="butt" type="button" onClick={props.update("Food Silo")}>
                            <div class='banner'>
                                <h4>Food Silo</h4>
                            </div> 
                            <img src="../../../../logo192.png" alt="buttonpng" border="0"/>
                        </button>
                        <button class="butt" type="button" onClick={props.update("Ammonium Silo")}>
                            <div class='banner'>
                                <h4>Ammonium Silo</h4>
                            </div> 
                            <img src="../../../../logo192.png" alt="buttonpng" border="0"/>
                        </button>
                    </div>
                    
            </div> 
    );
}

export default EncyclopediaHome;
