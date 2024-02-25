import React from 'react';
import '../styles/Signup.css';
import Navbar from './Navbar';

const Signup = () =>{
    return (
        <div>
            <Navbar/>
        <div className = "imgBx">
        
        <div className = "wrapper contenetBx">
            <form action="" method='POST'>
                <h1>CREATE AN ACCOUNT</h1>
                <div className="input-box">
                    <input type="text" placeholder="Username" required/>
                    <p className = 'icons'>😁</p>
                </div>
                    <div className="input-box">
                        <input type="text" placeholder="Email" required/>
                        <p className = 'icons'>📧</p>
                    </div>
                    <div className="input-box">
                        <input type="password" placeholder="Password" required/>
                        <p className = 'icons'>🔒</p>
                    </div>
                    <div className="input-box">
                        <input type="text" placeholder="Location" required/>
                        <p className = 'icons'>📍</p>
                    </div>
                    <div className="input-box">
                        <input type="text" placeholder="Eithic" required/>
                        <p className = 'icons'>😎</p>
                    </div>
                <button type="submit">Sign Up!</button>
                <div className="register-link">
                <p>Already have an account? <a href = "/login">Login here!</a></p>
                </div>
            </form>
    </div>
    </div>
    </div>
    );
}

export default Signup;