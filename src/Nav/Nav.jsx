import React, { useState } from 'react';
import './nav.css';
import '../Styles/underline.css';
import '../Nav/display.css'

const Nav = () => {
  // State to manage the menu open/close state
  const [menuOpen, setMenuOpen] = useState(false);
  

  // Function to toggle the menu state
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
    // const menu = document.queryselector("hamburger-link");
    // const icon = document.queryselector(".hamburger-icon");
    // menu.classList.toggle("open")
    // menu.classList.toggle("open")
  };

  return (
    <>
      {/* Main navigation */}
      <nav id='main-nav'>
        <div className='logo'>
          <a href='/'>Sai Yarlagadda</a>
        </div>
        <div className='menu-link'>
          <ul>
            <li>
              <a href='/about' className='underline nav-anchor'>About</a>
            </li>
            <li>
              <a href='/projects' className='underline'>Projects</a>
            </li>
            <li>
              <a href='/contact' className='underline'>Contact</a>
            </li>
          </ul>
        </div>
      </nav>

      {/* Hamburger navigation */}
      <nav id='hamburger-nav'>
        <div className='logo'>
          <a className='ham-anchor' href='/'>SY</a>
        </div>
        <div className='hamburger-menu'>
          <div className='hamburger-icon' onClick={toggleMenu}>
            <span className='bar'></span>
            <span className='bar'></span>
            <span className='bar'></span>
          </div>
          {/* Conditionally render hamburger links */}
          {menuOpen && (
            <div className='hamburger-link'>
              <ul className='menu'>
                <li>
                  <a href='/about' onClick={toggleMenu}>About</a>
                </li>
                <li>
                  <a href='/projects' onClick={toggleMenu}>Projects</a>
                </li>
                <li>
                  <a href='/contact' onClick={toggleMenu}>Contact</a>
                </li>
              </ul>
            </div>
          )}
        </div>
      </nav>
    </>
  );
};

export default Nav;
