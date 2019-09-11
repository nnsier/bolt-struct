import React from 'react';
import useForm from 'react-hook-form';

export default function Form() {
  const { register, errors, handleSubmit } = useForm();
  const onSubmit = (data: any) => {
    fetch('/api/register', {
      method: 'POST',
      body: JSON.stringify(data),
      headers:{
        'Content-Type': 'application/json'
      }
    }).then(response => response.json())
      .then(response => console.log('Success:', JSON.stringify(response)))
      .catch(error => console.log('Error:', error));
    console.log((JSON.stringify(data)));
  };
  if(Object.keys(errors).length > 0){
    console.log(errors);
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label>Username</label>
        <input
          type="text"
          name="username"
          ref={register({ required: true, maxLength: 12 })}
        />
      </div>
      <div>
        <label>password</label>
        <input
          type="password"
          name="password"
          ref={register({ required: true, minLength: 6, maxLength: 20 })}
        />
      </div>
      <div>
        <label>Email</label>
        <input
          type="text"
          name="Email"
          ref={register({
            required: true,
            pattern: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
          })}
        />
      </div>
      <button type="submit">Signup</button>
    </form>
  )
}