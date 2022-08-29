import React from 'react'
import {Link} from 'react-router-dom'
import './navbar.models.css'
import navLogo from './svg/nav-logo.svg'

const Navbar = () => {
  return (
    <div className='nav-bar'>
        <Link className='nav-bar-logo-a' to='/'><div className='nav-bar-logo'>
            <img src={navLogo} alt = 'logo' ></img>
            <h3>Lilies</h3>
        </div></Link>
        <div className='nav-bar-links'>
            <Link to= '/'>Home</Link>
            <Link to= '/login'> Login</Link>
            <div className='nav-bar-link-btn'>
              <Link to= '/sign-up'> <button>Sign Up</button></Link>
            </div>
        </div>
    </div>
  )
}

export default Navbar