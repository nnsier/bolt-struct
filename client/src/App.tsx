import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import  Form  from './components/Form/Form';

const LoginPage = () => {
  const login = (e: object) => {
    console.log(`you're logging in, champ`);
  }

  const signUp = (e: object) => {
    console.log(`what? you want a part of this? owo`);
  }

  return (
    <div>
      <h2>LoginPage</h2>
      <Form
        clickHandler={login}
        buttonText='Login'
      />
      <Form 
        clickHandler={signUp}
        buttonText='Sign up'
      />
    </div>
  )
}

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