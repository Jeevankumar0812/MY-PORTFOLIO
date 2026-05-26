import React, { useState } from 'react';

import './Navbar.scss';
import images from '../../constants/images';
import { IconMenu, IconClose } from '../Icons';

const links = ['home', 'about', 'work', 'skills', 'contact'];

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <nav className="app__navbar">
      <div className="app__navbar-logo">
        <img src={images.logo} alt="logo" />
      </div>

      <ul className="app__navbar-links">
        {links.map((item) => (
          <li className="app__flex p-text" key={`link-${item}`}>
            <div />
            <a href={`#${item}`}>{item}</a>
          </li>
        ))}
      </ul>

      <div className="app__navbar-menu">
        <button aria-label="Open menu" onClick={() => setToggle(true)}>
          <IconMenu />
        </button>

        {toggle && (
          <div className="app__navbar-menu-drawer">
            <button aria-label="Close menu" className="close-btn" onClick={() => setToggle(false)}>
              <IconClose />
            </button>
            <ul>
              {links.map((item) => (
                <li key={item}>
                  <a href={`#${item}`} onClick={() => setToggle(false)}>{item}</a>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
