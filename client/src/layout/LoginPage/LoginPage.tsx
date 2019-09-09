import React, { useState } from 'react';
import  Signup  from '../../components/Signup/Signup';
import Login from '../../components/Login/Login';
import StopWatch from '../../components/Stopwatch/Stopwatch.js'


const LoginPage = () => {

  return (
    <div>
      <StopWatch />
      <Login />
      <Signup />
    </div>
  )
}

export default LoginPage;
