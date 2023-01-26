import React, { useState } from 'react';

import PotatoPlant from './Pages/PotatoPlant';
import EncyclopediaHome from './Pages/EncyclopediaHome';
import FoodSilo from './Pages/FoodSilo';
import AmmoniumSilo from './Pages/AmmoniumSilo';

import './styles.css';

function Encyclopedia(props) {

    const homepage = props.homepage ?? "Home";

    const [currentPage, setCurrentPage] = useState(homepage);

    const [pageHistory, setPageHistory] = useState([homepage]);
    const [pageHistoryIndex, setPageHistoryIndex] = useState(0);

    const pushPage = (page) => {
        return () => {
            const newPageHistoryIndex = pageHistoryIndex + 1;
            const newPageHistory = [...(pageHistory.slice(0, newPageHistoryIndex)), page];
            const newCurrentPage = newPageHistory[newPageHistoryIndex];

            setPageHistoryIndex(newPageHistoryIndex);
            setPageHistory(newPageHistory);
            setCurrentPage(newCurrentPage);

            // console.log(newCurrentPage, newPageHistory, newPageHistoryIndex);
        }
    };

    const forwardPage = () => {
        const newPageHistoryIndex = pageHistoryIndex + 1;
        const newCurrentPage = pageHistory[newPageHistoryIndex];

        setPageHistoryIndex(newPageHistoryIndex);
        setCurrentPage(newCurrentPage);

        // console.log(newCurrentPage, pageHistory, newPageHistoryIndex);
    };

    const backPage = () => {
        const newPageHistoryIndex = pageHistoryIndex - 1;
        const newCurrentPage = pageHistory[newPageHistoryIndex];

        setPageHistoryIndex(newPageHistoryIndex);
        setCurrentPage(newCurrentPage);

        // console.log(newCurrentPage, pageHistory, newPageHistoryIndex);
    };

    const getCurrentPage = () => {
        switch (currentPage) {
            case "Home":
                return (<EncyclopediaHome update={pushPage} />);
            case "Potato Plant":
                return (<PotatoPlant update={pushPage} />);
            case "Ammonium Silo":
                return (<AmmoniumSilo update={pushPage} />);
            case "Food Silo":
                return (<FoodSilo update={pushPage} />);
            default:
                return (<EncyclopediaHome update={pushPage} />);
        }
    };

    return (
        <div className='main'>
            <div className='controls'>
                {(pageHistoryIndex > 0 && pageHistory.length > 1) ?
                    <span className='en-control' onClick={backPage}>←</span> 
                    : <span className='en-control-disabled'>←</span>}

                {(pageHistoryIndex < pageHistory.length - 1 && pageHistory.length > 1) ?
                    <span className='en-control' onClick={forwardPage}>→</span> :
                    <span className='en-control-disabled'>→</span>}
            </div>
            {getCurrentPage()}
        </div>
    );
}

export default Encyclopedia;
