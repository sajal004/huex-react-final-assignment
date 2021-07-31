
import React from 'react';
import { render } from 'react-dom';
import './Header.css';

const Header = () => {
return(
    <header className="header">
        <div className="logo">
          <img src="/images/Logo.png" alt="logo"></img>
        </div>
        <div className="header-contents">
          <div className="header-links">
            <a href="courses.html">COURSES</a>
            <a href="WISHLIST.html">MY WISHLIST</a>
          </div>
          
          <div className="header-icons">
            <img src="/images/cart.png" alt="cart"></img>
            <img src="/images/profile.png" alt="profile"></img>
          </div>
          
        </div>
        
      </header>
);
}
export default Header;