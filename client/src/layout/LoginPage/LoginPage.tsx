import React, { useState } from 'react';
import  Signup  from '../../components/Signup/Signup';
import Login from '../../components/Login/Login';


const LoginPage = () => {

  return (
    <div>
     <Login />
     <Signup />
    </div>
  )
}

export default LoginPage;
