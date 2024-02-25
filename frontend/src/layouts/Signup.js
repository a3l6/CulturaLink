import React from 'react';
import '../styles/Signup.css';
import Navbar from './Navbar';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Signup = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [location, setLocation] = useState('');
  const [eth, setEth] = useState('');

  const navigate = useNavigate();
  return (
    <div>
      <Navbar />
      <div className="imgBx">

        <div className="wrapper contenetBx">
          <form action="" method='POST'>
            <h1>CREATE AN ACCOUNT</h1>
            <div className="input-box">
              <input type="text" placeholder="Username" required onChange={(event) => {
                setUsername(event.target.value)
              }} />
              <p className='icons'>😁</p>
            </div>
            <div className="input-box">
              <input type="text" placeholder="Email" required onChange={(event) => {
                setEmail(event.target.value)
              }} />
              <p className='icons'>📧</p>
            </div>
            <div className="input-box">
              <input type="password" placeholder="Password" required onChange={(event) => {
                setPassword(event.target.value)
              }} />
              <p className='icons'>🔒</p>
            </div>
            <div className="input-box">
              <input type="text" placeholder="Location" required onChange={(event) => {
                setLocation(event.target.value)
              }} />
              <p className='icons'>📍</p>
            </div>
            <div className="input-box">
              <input type="text" placeholder="Ethnicity" required onChange={(event) => {
                setEth(event.target.value)
              }} />
              <p className='icons'>😎</p>
            </div>
            <button type="button" onClick={async () => {
              const res = await fetch("http://127.0.0.1:5000/signup", {
                method: "POST",
                headers: {
                  "Content-Type": "application/json"
                },
                body: JSON.stringify({
                  username: username,
                  password: password,
                  culture: eth
                })
              })

              const json = await res.json()

              navigate("/")
            }}>Sign Up!</button>
            <div className="register-link">
              <p>Already have an account? <a href="/login">Login here!</a></p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Signup;
