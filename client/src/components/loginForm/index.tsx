import React, { useState, Fragment } from 'react';

function LoginForm(): JSX.Element {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  return(
    <Fragment>
      <form>
      
        <input
          placeholder="username"
          type="text"
          value={username}
          onChange={e => setUsername(e.target.value)}
          required 
        />
     
        <input
          placeholder="password" 
          type="text"
          value={password}
          onChange={e => setPassword(e.target.value)}
        />
        <button type='submit'>Login</button>
      
      </form>
    </Fragment>
  )
}

export default LoginForm;
