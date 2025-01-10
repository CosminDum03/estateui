import './change.scss';
import { Link } from 'react-router-dom';
import { useState } from 'react';

const Change = () => {
  const [passwordsareNotEqual, setPasswordsAreNotEqual] = useState();

  const handleSubmit = (event) => {
    event.preventDefault();

    const fd = new FormData(event.target);
    const data = Object.fromEntries(fd.entries());
    if (data.password !== data.confirmPassword) {
      setPasswordsAreNotEqual(true);
      return;
    }

    console.log(data);
  };

  return (
    <div className='login'>
      <div className='formContainer'>
        <form onSubmit={handleSubmit}>
          <h1>Change Your Password!</h1>
          <input
            name='password'
            type='password'
            placeholder='New Password'
            required
            minLength={6}
          />
          <input
            name='confirmPassword'
            type='password'
            placeholder='Confirm New Password'
            required
          />
          {passwordsareNotEqual && <p>Passwords must match.</p>}
          <button type='submit'>Done</button>
          <Link to='/register'>{"Don't"} you have an account?</Link>
        </form>
      </div>
      <div className='imgContainer'>
        <img src='/bg.png' alt='' />
      </div>
    </div>
  );
};

export default Change;
