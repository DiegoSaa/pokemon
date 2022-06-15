import { useState, useEffect } from 'react';
import Pokedex from '../../components/pokedex';
import ReactPlayer from 'react-player/youtube';
import styles from './Login.module.css';
import PokemonLogo from '../../assets/images/PokemonLogo.svg';
import Image from 'next/image';

export default function Login() {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [hasWindow, setHasWindow] = useState(false);

  useEffect(() => {
    if(typeof window !== 'undefined'){
      setHasWindow(true);
    }
  }, [])
  


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
      {
        hasWindow && 
        <div className={styles.Login__player_wrapper}>
          <ReactPlayer
            url="https://www.youtube.com/embed/e0mgl1oHWqM"
            className={styles.Login__react_player}
            playing  = {true}
            width="100%"
            height="100%"
            controls = {false}
            muted = {true}
          />
          <div className={styles.Login__overlay} />
        </div>
      }
      <div className={styles.Login__form_container}>
        <div className={styles.Login_pokemon_logo}>
          <Image
            src={PokemonLogo}
            alt="Logo pokemon"
            width={400}
            height={300}
          />
        </div>
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
    </div>
	)
}


