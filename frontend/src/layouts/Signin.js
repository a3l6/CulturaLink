import React from 'react';
import './loginin.css';

const Form = () =>{
    return (
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
                    <input type="checkbox"></input>
                    <label>Remember Me 🙂</label>
                    <div> 
                    <a href="#">Forgot Password?</a></div>
                </div>
                <button type="submit">Login</button>
                <div className="register-link">
                <p>Do not have an accoubt? <a href = "#">register here!</a></p>
                </div>
            </form>
        </div>
    );
}

export default Form;