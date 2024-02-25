import React from 'react';
import './Home.css'
import Navbar from './Navbar';

const Home = () => {
    return (
        <>
            <Navbar />
            <div className="home-container">    
            </div>  
            <div className='secondary-container'>
                    <h1>Embrace your roots</h1>
                    <h2>Connect your branches</h2>
                    <p><a href=''>Connect now</a></p>   
                </div>    
        </>
    );
}

export default Home;