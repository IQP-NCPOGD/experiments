
import { BrowserRouter as Router, Link } from "react-router-dom";

function ARJS() {
  return (
    <div> 
      <header>
        <Link to="/" >
          <button className="home">Home Page</button>
        </Link>
      </header>
    </div>
  );
}

export default ARJS;
