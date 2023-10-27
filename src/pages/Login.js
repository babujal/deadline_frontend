import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'

function Login(props) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const userLogin = props.userLogin
  const navigate = useNavigate()
  const url = props.URL+'/login'

  const handleUsernameChange = (event) => {
    setUsername(event.target.value)
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value)
  };

  const handleSubmit = async (event) => {
    event.preventDefault()

    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username, password }),
    });

    if (response.ok) {
      console.log('Login successful')
      userLogin()
      navigate('/vehicle')
    } else {
      console.error('Login failed')
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Username:
        <div class="input-group mb-3 justify-content-center">
        <input type="text" value={username} onChange={handleUsernameChange} />
        </div>
      </label>
      <br />
      <label>
        Password:
        <div class="input-group mb-3 justify-content-center">
        <input type="password" value={password} onChange={handlePasswordChange} />
        </div>
      </label>
      <br />
      <button type="submit" className="btn btn-primary">Login</button>
    </form>
  );
}

export default Login
