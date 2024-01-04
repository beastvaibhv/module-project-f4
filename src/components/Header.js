// Header.js
import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div>
      <div className='main-header'>
        <Link to="/">
          <div className="app-name">
            Santara
          </div>
        </Link>
        <div className='links'>
          <Link to="/" className='link'>
            Home
          </Link>
          <Link to="/cart" className='link'>
            Cart
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Header;
