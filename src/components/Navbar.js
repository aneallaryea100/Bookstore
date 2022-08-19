import React from 'react';
import './Navbar.css';
import { NavLink } from 'react-router-dom';

const Navbar = () => (
  <div className="navBarContainer">
    <div className="logoSectionBook">
      <p className="logoBook">BOOKSTORE CMS</p>
      <NavLink to="/" className="bookNavs">Books</NavLink>
      <NavLink to="cartegories" className="cartegoryNavs">Cartegories</NavLink>
    </div>
    <div><p>Icon</p></div>
  </div>
);

export default Navbar;
