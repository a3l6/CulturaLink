import React, { useState } from 'react';
import './loginin.css';
import { useHistory } from 'react-router-dom';

const Form = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const history = useHistory();

  return (
    <>
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
            <div className="remember-forgot" style={{justifyContent:'space-between'}}>
              <div>
              <input type="checkbox" style={{ width: '16px', height: '16px', marginRight: '2px' }}></input>
              <label style={{fontSize:'15px', color:'black'}}>Remember Me 🙂</label>
              </div>
              <div>
                <a href="#" style={{fontSize:'15px'}}>Forgot Password?</a></div>
            </div>
            <button type="button"  style={{padding:'10px', backgroundColor:'black', color:'white', width:'30%', alignSelf:'center', marginBottom:'5%'}} onClick={async () => {
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
                history.push('/articles')
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
