import './login.scss';
import { Link } from 'react-router-dom';

function Login() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const user = formData.get('username');
    const pas = formData.get('password');

    console.log('Username: ' + user);
    console.log('Password: ' + pas);
    console.log(formData);
  };

  return (
    <div className='login'>
      <div className='formContainer'>
        <form onSubmit={handleSubmit}>
          <h1>Welcome back</h1>
          <input name='username' type='text' placeholder='Username' />
          <input name='password' type='password' placeholder='Password' />
          <button type='submit'>Login</button>
          <Link to='/register'>{"Don't"} you have an account?</Link>
        </form>
      </div>
      <div className='imgContainer'>
        <img src='/bg.png' alt='' />
      </div>
    </div>
  );
}

export default Login;
