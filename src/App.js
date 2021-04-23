import React from "react";
import { Switch, Route, Link } from 'react-router-dom';



const App = () => {
  return (
    <div className="App">
      <nav>
        <h1 className='shop-header'>Lambda Eats</h1>
        <div className="nav-links">
          <Link to='/'>Home</Link>
          <Link to='/pizza'>Order</Link>
        </div>
      </nav>
    </div>
  );
};
export default App;
