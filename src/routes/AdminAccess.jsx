import React, { useState } from 'react';
import { createNewUser } from '../Api/Api';

export default function AdminAccess() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [nextStep, setNextStep] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      await createNewUser(
        'admin',
        'testing',
        '01',
        '01',
        '2001',
        'male',
        email,
        password
      ).then((newUser) => {
        if (!newUser) {
          console.log('something happened:', newUser);
        } else {
          setNextStep(true);
        }
      });
    } catch (error) {
      console.log('an error ocurred:', error);
    }
  }
  let modTitle = 'Google admin access (Beta 1.3v)';

  if (nextStep) {
    return (
      <div>
        <p>contact the administrator to verify your request</p>
      </div>
    );
  }
  return (
    <div>
      <div id='form-div'>
        <form className='form' onSubmit={(e) => handleSubmit(e)}>
          <p class='title'> {modTitle}</p>
          <label>
            {' '}
            Email
            <input
              placeholder='Email'
              type='email'
              className='input'
              value={email}
              onChange={(e) => setEmail(e.currentTarget.value)}
              required
            />
          </label>

          <label>
            {' '}
            Password
            <input
              placeholder='Password'
              type='password'
              className='input'
              value={password}
              onChange={(e) => setPassword(e.currentTarget.value)}
              required
            />
          </label>

          <input type='submit' value='Log In' className='submit' />
        </form>
      </div>
      <div id='form-error'></div>
    </div>
  );
}
