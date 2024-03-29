import React from 'react';
import ReactDOM, { hydrateRoot } from 'react-dom/client';
import './index.css';
import Home from './Home/Home';
import ARJS from './ARJS/ARJS';
import Cycle from './Cycle/Cycle';
import FarmersLog from './FarmersLog/FarmersLog';
import reportWebVitals from './reportWebVitals';

import { BrowserRouter as Router, Routes, Route, Link, Outlet } from "react-router-dom";
const App = () => {
  return ( 
   <Router>
      <Routes>
        <Route path="/" element={<Layout />} >
          <Route index element={<Home />} />
          <Route path="Cycle" element={<Cycle /> }/>
          <Route path="ARJS" element={<ARJS />} />
          <Route path="FarmersLog" element={<FarmersLog />} />
        </Route>
      </Routes>
    </Router>
  );
};

const Layout = () => {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/"> Home</Link>
          </li>
          
          <li>
            <Link to="/ARJS"> AR.js</Link>
          </li>

          <li>
            <Link to="/Cycle">Nitrogen Cycle</Link>
          </li>

          <li>
            <Link to="/FarmersLog">Farmer's Log</Link>
          </li>
        </ul>
      </nav>

    <Outlet />
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
