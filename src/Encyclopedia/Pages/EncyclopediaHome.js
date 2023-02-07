import React from 'react';
import { useState } from 'react';

import '../styles.css';

function EncyclopediaHome(props) {
    const [selectedIndex, setSelectedIndex] = useState(0);

    let tabArray = [
        <div class="tabContent" id="resources">
                        <button className="butt" type="button" onClick={props.update("Food")}>                            
                            <div className='banner'>
                                <h4>Food</h4>
                            </div> 
                            <img src="../../../../logo192.png" alt="buttonpng" border="0"/>
                        </button>
                        <button className="butt" type="button" onClick={props.update("Ammonium")}>                            
                            <div className='banner'>
                                <h4>Ammonium</h4>
                            </div> 
                            <img src="../../../../logo192.png" alt="buttonpng" border="0"/>
                        </button>
                        <button className="butt" type="button" onClick={props.update("Nitrogen")}>
                            <div className='banner'>
                                <h4>Nitrogen</h4>
                            </div> 
                            <img src="../../../../logo192.png" alt="buttonpng" border="0"/>
                        </button>
                        <button className="butt" type="button" onClick={props.update("Nitrogen Runoff")}>
                            <div className='banner'>
                                <h4>Nitrogen Runoff</h4>
                            </div> 
                            <img src="../../../../logo192.png" alt="buttonpng" border="0"/>
                        </button>
                    </div>,
                         <div className="tabContent" id="tiles">
                         <button className="butt" type="button" onClick={props.update("Potato Plant")}>
                             <div className='banner'>
                                 <h4>Potato Plant</h4>
                             </div> 
                             <img src="../../../../logo192.png" alt="buttonpng" border="0"/>
                         </button>
                         <button className="butt" type="button" onClick={props.update("Food Silo")}>
                             <div className='banner'>
                                 <h4>Food Silo</h4>
                             </div> 
                             <img src="../../../../logo192.png" alt="buttonpng" border="0"/>
                         </button>
                         
                             <button className="butt" type="button" onClick={props.update("Ammonium Silo")}>
                             <div className='banner'>
                                 <h4>Ammonium Silo</h4>
                             </div> 
                         <img src="../../../../logo192.png" alt="buttonpng" border="0"/>
                         </button>  
 
                         <button className="butt" type="button" onClick={props.update("Nitrogen Fixator")}>
                             <div className='banner'>
                                 <h4>Nitrogen Fixator</h4>
                             </div> 
                             <img src="../../../../logo192.png" alt="buttonpng" border="0"/>
                         </button>
                     </div>,
                     <div></div>];

    return (
            <div className='main'>
                <h1>Encyclopedia Home Page</h1>
                <p>Welcome to the encyclopedia.</p>
                <p>Here is a list of all the current pages:</p>

                <ul>
                    <div className="tab">
                        <button onClick={() => setSelectedIndex(0)}>Resources</button>
                        <button onClick={() => setSelectedIndex(1)}>Tile</button>
                        <button onClick={() => setSelectedIndex(2)}>Concepts</button>
                    </div>
                    {tabArray[selectedIndex]}
                </ul>  

            </div> 
    );
}


export default EncyclopediaHome;
