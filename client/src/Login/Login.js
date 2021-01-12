import classes from './Login.module.css';
import Input from '../UI/InputField/Input';
import { FaSpotify, FaApple, FaFacebook } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';
import { NavLink } from 'react-router-dom';

const login = (props) => {
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
            style={{
              border: 'none',
              backgroundColor: '#264a99',
              color: 'white',
            }}
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
          <Input
            id='email'
            type='text'
            label='Email address or username'
            placeholder='Enter your email address or username'
            focus
          />
          <Input
            id='password'
            type='password'
            label='Password'
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
        <NavLink className={classes.Btn} to='/signup'>
          Sign Up For Spotify
        </NavLink>
      </div>
    </div>
  );
};

export default login;
