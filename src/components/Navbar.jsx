import React from 'react';
import { Link } from 'react-router-dom';
import { FaUser } from 'react-icons/fa';

const Navbar = () => (
  <header className="header__cont">
    <Link to="/" className="header__logo">
      BookStore CMS
      {' '}
    </Link>
    <nav className="header__nav">
      <Link className="header__link" to="/">
        Books
      </Link>
      <Link className="header__link" to="/categories">
        Categories
      </Link>
    </nav>
    <div className="header__avatar-cont">
      <FaUser className="header__avatar" />
    </div>
  </header>
);

export default Navbar;
