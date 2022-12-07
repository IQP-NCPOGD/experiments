import logo from './logo.png';
import './Home.css';

import { Route, Link } from "react-router-dom";

function Home() {
  return (
    <div className="Home">
      <header className="Home-header">
        <p>
          IQP: Nitrogen Cycle Public Outreach and Game Development
        </p>
        <img src={logo} className="Home-logo" alt="logo" />
      </header>
    </div>
  );
}

export default Home;
