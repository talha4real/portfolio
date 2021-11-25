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
                <span style={{ transform: 'translate(25px, 26px)' }} onClick={togglenav}>
                    <FontAwesomeIcon icon={faTimes} />
                </span>

            </div>
            <ul>
                <li>
                    <a href='#home'>Home</a>
                </li>
                <li>
                    <a href='#contact'>Contact</a>
                </li>

                <li>
                    <a href='#services'>Service</a>
                </li>

                <li>
                    <a href='#client'>Client</a>
                </li>
            </ul>
        </div>
    )
}

export default Navbar
