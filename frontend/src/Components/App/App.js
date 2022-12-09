import './App.css';
import { useEffect, useState } from "react";
import { Link, Outlet } from "react-router-dom";

function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("/api")
      .then((res) => res.json())
      .then((data) => setData(data.message));
  }, []);

  console.log(data)
  useEffect(() => {
    console.log(data)
  },[data])
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