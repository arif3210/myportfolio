import React from 'react'
import './NavBar.css'
const NavBar = () => {
  return (
    <div className='navbar'>
        <div className="navbar-contents">
            <p className='navbar-contents-logo'>Arif Rahman</p>
            <ul className='navbar-contents-ul'>
                <li className="navbar-item">About</li>
                <li className="navbar-item">menu2</li>
                <li className="navbar-item">menu3</li>
            </ul>
            <p className='navbar-contents-blank'></p>
        </div>
    </div>
  )
}

export default NavBar