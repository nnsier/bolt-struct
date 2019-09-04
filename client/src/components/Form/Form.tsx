import React, { useState, Fragment } from 'react';

// type Form = {
//   ClickHandler: (event: React.MouseEvent<HTMLButtonElement>) => void
//   buttonText: string,
// }

export interface Form { 
  clickHandler: (event: React.MouseEvent<HTMLButtonElement>) => void,
  buttonText: string,
}

const Form: React.FunctionComponent<{ 
  clickHandler: (event: React.MouseEvent<HTMLButtonElement>) => void,
  buttonText: string,
}> = (props: any) => {
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
          required
        />
        <button type='submit' onClick={props.clickHandler}>{props.buttonText}</button>
      </form>
    </Fragment>
  )
}

export default Form;
