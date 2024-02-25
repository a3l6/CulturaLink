import React from 'react';
import '../styles/loginin.css';
import Navbar from './Navbar';

const Form = () =>{
    return (
        <>
        <Navbar/>
        <div className='initial-wrapper'>
        <div className = "wrapper">           
            <form action="">
                <h1>Login</h1>
                <div className="input-box">
                    <input type="text" placeholder="Username" required/>
                    <p className = 'icons'>👨🏿</p>
                    </div>
                    <div className="input-box">
                        <input type="password" placeholder="Password" required/>
                        <p className = 'icons'>🔒</p>
                    </div>
                    <div className = "remember-forgot">
                    <div>
                    <input type="checkbox"></input>
                    <label>Remember Me 🙂</label>
                    </div>
                    <div> 
                    <a href="#">Forgot Password?</a></div>
                </div>
                <button type="submit">Login</button>
                <div className="register-link">
                <p>Do not have an accoubt? <a href = "/Signup">register here!</a></p>
                </div>
            </form>
        </div>

        </div>
        </>
    );
}

export default Form;