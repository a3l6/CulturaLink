import React from 'react';
import './signup.css';

const Signup = () =>{
    return (
        <div>
        <div className = "imgBx">
        </div>
        <div className = "wrapper contenetBx">
            <form action="">
                <h1>Create A Account</h1>
                <div className="input-box">
                    <input type="text" placeholder="Username" required/>
                    <p className = 'icons'>😁</p>
                    
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
                </div>
                <button type="submit">Sign Up!</button>
                
            </form>
    </div>
    </div>
    );
}

export default Signup;