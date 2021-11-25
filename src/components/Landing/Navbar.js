import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'
import './Navbar.css'

const Navbar = ({ showNav, togglenav }) => {
    return (
        <div className={showNav ? 'sidenav active' : 'sidenav'}>
            <div className='headernav'>
                <h3 style={{ color: '#39b54a' }}>
                    Navigation
                </h3>
                <span style={{ transform: 'translate(20px, 26px)' }} onClick={togglenav}>
                    <FontAwesomeIcon icon={faTimes} />
                </span>

            </div>
            <ul>
                <li>
                    <a href='/'>Home</a>
                </li>
                <li>
                    <a href='/'>Contact</a>
                </li>
                <li>
                    <a href='/'>About us</a>
                </li>
                <li>
                    <a href='/'>Service</a>
                </li>
                <li>
                    <a href='/'>Work</a>
                </li>
                <li>
                    <a href='/'>Client</a>
                </li>
            </ul>
        </div>
    )
}

export default Navbar
