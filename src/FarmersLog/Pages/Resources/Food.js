import React from 'react';

import '../../styles.css';

function Food(props) {

    return (
        <div className='main'>
            <h1>Food</h1>
            <p>This is the page for Food.</p>
            <div class='true-center'>
                <button class="butt" type="button" onClick={props.update("Home")}>
                    <div class='banner'>
                        <h4>Home</h4>
                    </div> 
                    <img src="../../../../logo192.png" alt="buttonpng" border="0"/>
                </button>
            </div>
        </div>
    );
}

export default Food;
