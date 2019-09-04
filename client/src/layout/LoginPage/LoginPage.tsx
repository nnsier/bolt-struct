import React from 'react';
import  Form  from '../../components/Form/Form';

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

export default LoginPage;
