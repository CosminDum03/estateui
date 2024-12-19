import './register.scss';
import { Link } from 'react-router-dom';
import { useState } from 'react';

function Register() {
  const [enteredValues, setEnteredValues] = useState({
    email: '',
    password: '',
    username: '',
  });

  const [didEdit, setDidEdit] = useState({
    email: false,
    password: false,
    username: false,
  });

  const handleSubmit = (event) => {
    event.preventDefault();

    const fd = new FormData(event.target);
    const data = Object.fromEntries(fd.entries());
    console.log(data);
  };

  const handleInputChange = (identifier, value) => {
    setEnteredValues((prevValues) => ({
      ...prevValues,
      [identifier]: value,
    }));
    setDidEdit((prevEdit) => ({
      [identifier]: false,
    }));
  };

  const handleInputBlur = (identifier) => {
    setDidEdit((prevEdit) => ({
      ...prevEdit,
      [identifier]: true,
    }));
  };

  const emailIsInvalid = didEdit.email && !enteredValues.email.includes('@');

  return (
    <div className='register'>
      <div className='formContainer'>
        <form onSubmit={handleSubmit}>
          <h1>Create an Account</h1>
          <input
            name='username'
            type='text'
            placeholder='Username'
            onChange={(event) =>
              handleInputChange('username', event.target.value)
            }
            value={enteredValues.username}
          />
          <input
            name='email'
            type='text'
            placeholder='Email'
            onBlur={() => handleInputBlur('email')}
            onChange={(event) => handleInputChange('email', event.target.value)}
            value={enteredValues.email}
          />
          {emailIsInvalid && <p>Email is not valid</p>}
          <input
            name='password'
            type='password'
            placeholder='Password'
            onChange={(event) =>
              handleInputChange('password', event.target.value)
            }
            value={enteredValues.password}
          />
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
