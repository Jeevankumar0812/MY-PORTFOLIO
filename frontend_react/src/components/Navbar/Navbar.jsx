import React from 'react';

import './Navbar.scss';
import images from '../../constants/images';

const Navbar = () => {
  return (
    <nav>
        <div>
            <img src={images.logo} alt='logo'/>
        </div>
    </nav>
  )
}

export default Navbar;
