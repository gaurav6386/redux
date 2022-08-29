import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import Badge from '@mui/material/Badge';
import ShoppingCart from '@mui/icons-material/ShoppingCart';

const Navbar = () => {
  // const isActive = 
  return (
    <div className='nav-wrapper'>
      <div className="navbar">
          <div className='logo-wrapper'>
            <span className='logo'>Redux Store</span>
          </div>
          <div className='navLinkWrapper'>
              <NavLink className="navLink home" to="/">Home</NavLink>
              <NavLink className="navLink product" to="/product">Product</NavLink>
              <NavLink className="navLink cart" to="/cart">
                <Badge badgeContent={4} color="primary">
                  <ShoppingCart color='action' />
                </Badge>
              </NavLink>
              <hr className='selected' />
          </div>
      </div>
    </div>
  )
}

export default Navbar