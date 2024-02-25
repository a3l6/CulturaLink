import React from 'react';
import '../styles/Home.css';
import Navbar from './Navbar';

const Home = () => {
    return (
        <>
            <Navbar />
            <div className="home-container">    
            </div>  
            <div className='secondary-container'>
                    <p id='h1-connect'>Embrace your roots</p>
                    <p id='h2-connect'>Connect your branches</p>
                    <p id='h3-connect'><a href='/Signup'>Connect now</a></p>   
                </div>    
        </>
    );
}

export default Home;