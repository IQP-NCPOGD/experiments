import React, { useState } from 'react';
import PotatoPlant from './Pages/PotatoPlant';
import EncyclopediaHome from './Pages/EncyclopediaHome';
import './styles.css';

function Encyclopedia() {

    const [currentPage, setCurrentPage] = useState("Home");

    const updateCurrentPage = (page) => {
        return () => setCurrentPage(page);
    };

    const getCurrentPage = () => {
        switch(currentPage) {
            case "Home":
                return (<EncyclopediaHome updateCurrentPage={updateCurrentPage} />);
            case "Potato Plant":
                return (<PotatoPlant updateCurrentPage={updateCurrentPage}/>);
            default:
                return (<EncyclopediaHome updateCurrentPage={updateCurrentPage} />);
        }
    };

    return (
        <div className='main'>
            {getCurrentPage()}
        </div>
    );
}

export default Encyclopedia;
