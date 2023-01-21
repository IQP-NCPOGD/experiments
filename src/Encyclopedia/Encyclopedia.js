import React, { useState, useEffect } from 'react';

import './styles.css';

function Encyclopedia() {

    const [currentPage, setCurrentPage] = useState("Encyclopedia");
    const [currentPageContent, setCurrentPageContent] = useState("");

    useEffect(() => {
        loadPage(currentPage);

        const pageUpdateHandler = (e) => {
            alert(e);
        };

        window.addEventListener('pageUpdate', pageUpdateHandler);
        return () => {
            window.removeEventListener('pageUpdate', pageUpdateHandler);
        };
    }, [])

    const encyclopediaFolder = 'EncyclopediaPages';
    const encyclopediaPages = {
        Encyclopedia: 'index.html',
        PotatoPlant: 'potatoPlant.html'
    }

    const updatePage = (page) => {
        setCurrentPage(page);
    };

    const loadPage = async (page) => {
        const text = await fetch(`/${encyclopediaFolder}/${encyclopediaPages[page]}`).then((response) => {
            return response.text();
        });
        setCurrentPageContent(text);
    };

    return (
        <div className='main'>
            <div className='content' dangerouslySetInnerHTML={{ __html: currentPageContent }}>
            </div>
        </div>
    );
}

export default Encyclopedia;
