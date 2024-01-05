// Header.js
import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div>
      <div className='main-header'>
        <a href="/">
          <div className="app-name">
            Santara
          </div>
        </a>
        <div className='links'>
          <a href="/" className='link'>
            Home
          </a>
          <a href="/cart" className='link'>
            Cart
          </a>
        </div>
      </div>
    </div>
  );
}

export default Header;
