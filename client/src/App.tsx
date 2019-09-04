import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import LoginPage from './layout/LoginPage/LoginPage';

function Home() {
  return (
    <div>
      <h2>Home</h2>
    </div>
  )
}

function App() {
  return (
    <Router>
      <div>
        <ul>
          <li>
            <Link to="/">Login</Link>
            <Link to="/home">Home</Link>
          </li>
        </ul>
      </div>
      We're here, boys.
      <Route exact path="/" component={LoginPage} />
      <Route exact path="/home" component={Home} />

    </Router>
  );
}

export default App;