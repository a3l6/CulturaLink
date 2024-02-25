import React from 'react';
import './Signup.css';
import Navbar from '../Navbar/Navbar';

const Signup = () =>{
    return (
        <div>
        <div className = "imgBx">
        
        <div className = "wrapper contenetBx" style={{marginTop:'-5%', marginBottom:'5%'}}>
            <form action="" method='POST'>
                <h1 style={{color:"black",  marginBottom:'5px'}}>CREATE AN ACCOUNT</h1>
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