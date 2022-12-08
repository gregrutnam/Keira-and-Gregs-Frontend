import './App.css';
import { useEffect } from "react";
import { Link, Outlet } from "react-router-dom";

function App() {

  return (
    <div className="App">
      <nav>
        <div className="nav-bar">
          <Link to={`/`}>Home</Link>
          <Link to={'playlist'}>My mixes</Link>
          <Link to={`about`}>About</Link>
        </div>
      </nav>
      <Outlet/>
    </div>
  );
}

export default App;