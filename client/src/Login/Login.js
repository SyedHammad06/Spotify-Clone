import classes from './Login.module.css';
import { FaSpotify, FaApple, FaFacebook } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';
import { NavLink } from 'react-router-dom';

const login = () => {
  return (
    <div className={classes.Login}>
      <div className={classes.Top}>
        <FaSpotify size={70} />
        <h1>Spotify</h1>
      </div>
      <hr />
      <div className={classes.Midsection}>
        <p className={classes.SubHeading}>To continue, log in with Spotify</p>
        <div className={classes.ButtonGroup}>
          <button
            style={{ border: 'none', backgroundColor: 'blue', color: 'white' }}
          >
            <FaFacebook size={30} />
            <p>Continue With Facebook</p>
          </button>
          <button
            style={{ border: 'none', backgroundColor: 'black', color: 'white' }}
          >
            <FaApple size={30} />
            <p>Continue With Apple</p>
          </button>
          <button>
            <FcGoogle size={30} />
            <p>Continue With Google</p>
          </button>
          <button style={{ padding: '1.5rem 4rem' }}>
            <p>Continue With Phone Number</p>
          </button>
        </div>
        <p className={classes.SubHeading2}>Or</p>
        <form action='/' className={classes.Form}>
          <label htmlFor='email'>Email address or username</label>
          <input
            type='text'
            id='email'
            placeholder='Enter your email address or username'
            autoFocus
          />
          <label htmlFor='password'>Password</label>
          <input
            type='password'
            id='password'
            placeholder='Enter your password'
          />
          <div className={classes.Lower}>
            <a href='/'>Forget your Password?</a>
            <button type='submit'>Log In</button>
          </div>
        </form>
      </div>
      <hr style={{ width: '41.5rem', margin: '0 auto' }} />
      <div className={classes.Bottom}>
        <h2>Don't have an account?</h2>
        <button>
          <NavLink to='/'>Sign Up For Spotify</NavLink>
        </button>
      </div>
    </div>
  );
};

export default login;
