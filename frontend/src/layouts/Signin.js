import React, { useState } from 'react';
import '../styles/loginin.css';
import Navbar from './Navbar';
import { useNavigate } from 'react-router-dom';

const Form = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();

  return (
    <>
      <Navbar />
      <div className='initial-wrapper'>
        <div className="wrapper">
          <form action="">
            <h1>Login</h1>
            <div className="input-box">
              <input type="text" placeholder="Username" onChange={(event) => {
                setUsername(event.target.value)
              }} required />
              <p className='icons'>👨🏿</p>
            </div>
            <div className="input-box">
              <input type="password" placeholder="Password" onChange={(event) => {
                setPassword(event.target.value)
              }} required />
              <p className='icons'>🔒</p>
            </div>
            <div className="remember-forgot">
              <div>
                <input type="checkbox"></input>
                <label>Remember Me 🙂</label>
              </div>
              <div>
                <a href="#">Forgot Password?</a></div>
            </div>
            <button type="button" onClick={async () => {
              const res = await fetch("http://127.0.0.1:5000/login", {
                method: "POST",
                headers: {
                  "Content-Type": "application/json"
                },
                body: JSON.stringify({
                  username: username,
                  password: password
                })
              })
              const json = await res.json()

              if (json.msg == "Success") {
                navigate("/")
              }
            }}
            >Login</button>
            <div className="register-link">
              <p>Do not have an account? <a href="/Signup">register here!</a></p>
            </div>
          </form>
        </div>

      </div>
    </>
  );
}

export default Form;
