import React, { useState, useEffect } from 'react';
// import { Button } from './Button';
import { Link } from 'react-router-dom';
import './Navbar.css';
// import LoginButton from './LoginButton';

function Navbar() {
  const [click, setClick] = useState(false);
  // const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    // if (window.innerWidth <= 960) {
    //   setButton(false);
    // } else {
    //   setButton(true);
    // }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener('resize', showButton);

  return (
    <>
      <nav class='navbar'>
        <div class='navbar-container'>
          <Link to='/' class='navbar-logo' onClick={closeMobileMenu}>
            {/* <img src='/images/logo.png' alt='...' /> */}
            {/* <i class='fab fa-typo3' /> */}
          </Link>
          <div class='menu-icon' onClick={handleClick}>
            <i class={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul class={click ? 'nav-menu active' : 'nav-menu'}>
            <li class='nav-item'>
              <Link to='/' class='nav-links' onClick={closeMobileMenu}>
                Home
              </Link>
            </li>
            <li class='nav-item'>
              <Link
                to='/services'
                class='nav-links'
                onClick={closeMobileMenu}
              >
                About Us
              </Link>
            </li>
            <li class='nav-item'>
              <Link
                to='/products'
                class='nav-links'
                onClick={closeMobileMenu}
              >
                News
              </Link>
            </li>

            <li class='nav-item'>
              <Link
                to='/sign-up'
                class='nav-links'
                onClick={closeMobileMenu}
              >
                Access Tool
              </Link>
            </li>

            <li>
              <Link
                to='/sign-up'
                class='nav-links-mobile'
                onClick={closeMobileMenu}
              >
                Sign Up
              </Link>
            </li>
          </ul>
          {/* <LoginButton /> */}
          {/* <Button buttonSize='btn--medium' buttonStyle='btn-primary'>Access Tool</Button>
          {button && <Button buttonStyle='btn--outline'>SIGN UP</Button>} */}
          {/* <Link className='nav-links'>
            Access Tool
          </Link> */}
        </div>
      </nav>
    </>
  );
}

export default Navbar;
