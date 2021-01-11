import { FaSpotify } from 'react-icons/fa';
import classes from './Signup.module.css';
import Input from '../UI/InputField/Input';

const signUp = () => {
  return (
    <div className={classes.SignUp}>
      <div className={classes.TopSection}>
        <div className={classes.Logo}>
          <FaSpotify size={60} />
          <h1>Spotify</h1>
        </div>
        <h2>Sign up for free to start listening.</h2>
        <button>
          <a href='/'>Sign up with facebook</a>
        </button>
      </div>
      <p style={{ marginTop: 20 }}>or</p>
      <div className={classes.Fields}>
        <Input
          type='email'
          id='emailAd'
          label="What's your email?"
          placeholder='Enter your email'
          focus
        />
        <a href='/' className={classes.Link}>
          Use phone number instead?
        </a>
        <Input
          type='email'
          id='emailAdd'
          label='Confirm your email'
          placeholder='Enter your email again'
        />
        <Input
          type='password'
          id='password'
          label='Create a password'
          placeholder='Create a password'
        />
        <Input
          type='text'
          id='username'
          label='What should we name you?'
          placeholder='Enter a profile name'
        />
        <p className={classes.SubTopic}>This appears on your profile</p>
        <label htmlFor='dob'>What's your date of birth</label>
        <div className={classes.DOB}>
          <div>
            <label htmlFor='year'>Year</label>
            <input
              style={{ marginRight: '1.5rem' }}
              type='text'
              id='year'
              placeholder='YYYY'
            />
          </div>
          <div>
            <label htmlFor='month'>Month</label>
            <input
              type='text'
              id='month'
              placeholder='Month'
              style={{ width: '20rem', marginRight: '1.5rem' }}
            />
          </div>
          <div>
            <label htmlFor='date'>Date</label>
            <input
              type='text'
              id='date'
              placeholder='YYYY'
              style={{ width: '7rem' }}
            />
          </div>
        </div>
        <label htmlFor='gender'>What's your gender?</label>
        <div className={classes.Gender}>
          <input type='radio' id='gender' value='Male' name='gender' />
          Male
          <input type='radio' id='gender' value='Female' name='gender' />
          Female
          <input type='radio' id='gender' value='Non-binary' name='gender' />
          Non-binary
        </div>
        <div className={classes.PP}>
          <input type='checkbox' />
          <p>I agree to the terms and conditions of the Privacy Policy</p>
        </div>
        <button className={classes.Btn}>SIGN UP</button>
        <p className={classes.BottomText}>
          Have an account? <a href='/login'>Log in</a>
        </p>
      </div>
    </div>
  );
};

export default signUp;
