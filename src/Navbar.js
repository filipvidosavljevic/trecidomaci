
import React from 'react'
import './Navbar.css'
import NavbarLink from './NavbarLink'


function Navbar() {
    return (
        <div className="container">
            <NavbarLink text="Igra" to="/igra"/>
            <NavbarLink text="Pravila" to="/pravila" />
        </div>
    )
}

export default Navbar
