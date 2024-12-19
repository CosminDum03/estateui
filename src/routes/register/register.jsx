import './register.scss';
import { Link } from 'react-router-dom';
import { useState } from 'react';

function Register() {
  const [passwordsareNotEqual, setPasswordsAreNotEqual] = useState();

  const handleSubmit = (event) => {
    event.preventDefault();

    const fd = new FormData(event.target);
    const data = Object.fromEntries(fd.entries());
    if (data.password !== data['confirm-password']) {
      setPasswordsAreNotEqual(true);
      return;
    }

    console.log(data);
  };

  return (
    <div className='register'>
      <div className='formContainer'>
        <form onSubmit={handleSubmit}>
          <h1>Create an Account</h1>
          <input
            name='username'
            type='text'
            placeholder='Username'
            required
            minLength={5}
          />
          <input name='email' type='email' placeholder='Email' required />
          <input
            name='password'
            type='password'
            placeholder='Password'
            required
            minLength={6}
          />
          <input
            name='confirm-password'
            type='password'
            placeholder='Confirm Password'
            required
          />
          {passwordsareNotEqual && <p>Passwords must match.</p>}
          <button type='submit'>Register</button>
          <Link to='/login'>Do you have an account?</Link>
        </form>
      </div>
      <div className='imgContainer'>
        <img src='/bg.png' alt='' />
      </div>
    </div>
  );
}

export default Register;
