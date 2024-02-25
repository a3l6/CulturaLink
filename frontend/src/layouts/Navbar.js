import React from 'react'
import '../styles/Navbar.css';

const Navbar = () => {
    return (
        <>
                <div className='nav-container'>
            <nav>
                <div className='company-icon'>
                    <img src='https://media.discordapp.net/attachments/1207853354429063212/1211130887320768593/CulturalINk.png?ex=65ed1489&is=65da9f89&hm=309c00e2244adbd99f4c00a646b265d093c96dbc6c21196c9edf39010eb2b28c&=&format=webp&quality=lossless&width=525&height=525' alt='logo-image'/>
                    <span>CulturaLink</span>
                    <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="/events">Events</a></li>
                    <li><a href="/recipes">Recipes</a></li>
                    <li><a href="/">Articles</a></li>
                    <li><a href="/Signup">Sign Up</a></li>
                    </ul>
                </div>
            </nav>
        </div>


        </>
    );
  }

export default Navbar