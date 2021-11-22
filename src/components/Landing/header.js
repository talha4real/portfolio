import React from 'react'
import './header.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'

function Header() {
    return (
        <div className='s-header'>
            <div className='headerLogo'>
                <a href='#index'>

                </a>
            </div>
            <nav>

            </nav>
            <a className='header-menu-toggle' href='#0'>
                <span className='header-menu-text' style={{ fontSize: '1.3rem', textTransform: 'uppercase', letterSpacing: '0.3rem', color: '#39b54a' }}>
                    Menu
                </span>
                <span className='header-menu-icon' style={{ transform: 'translate(10px, 0px)' }}>
                    <FontAwesomeIcon icon={faBars} />
                </span>
            </a>
        </div>
    )
}

export default Header
