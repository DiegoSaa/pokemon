import { useState } from 'react';
import Pokedex from '../../components/pokedex';

import styles from './Login.module.css';

export default function Login() {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email: email, password: password })
  };

    window.fetch('/api/login', requestOptions).then(res => {
      if (res.status === 200) {
        window.location.href = '/';
      }
      else {
        alert('Invalid credentials');
      }
    }).catch(err => {
      alert('Invalid credentials');
    });
  }

  return (
    <div className={styles.Login__pokedex_container}>
      <Pokedex>
        <form
          className= {styles.Login__form}
          onSubmit={(e) => handleSubmit(e)}
        >
          <div className={ styles.Login__container }>
            <input
              value = {email}
              onChange = {(e) => setEmail(e.target.value)}
              name='email'
              type='email'
              placeholder='E-mail'
              required
            />
            <input
              value = {password}
              onChange = {(e) => setPassword(e.target.value)}
              name='password'
              type='password'
              placeholder='Password'
              required
            />
          </div>
          <button className= {styles.Login__submit} type='submit'>
            { 'Sign in'}
          </button>
        </form>
      </Pokedex>
    </div>
	)
}


