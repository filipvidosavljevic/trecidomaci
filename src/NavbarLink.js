import React from 'react';
import { Link } from 'react-router-dom'
import './NavbarLink.css'


function NavbarLink({ text, to }) {

  return (
    <div className="navbarLink">
      <Link to={to}>{text}</Link>
    </div>
  );
}

export default NavbarLink;
