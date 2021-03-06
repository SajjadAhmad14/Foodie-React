import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMobile } from '@fortawesome/free-solid-svg-icons';

const Nav = () => (
  <div>
    <nav className="navigation">
      <a href="/">
        <FontAwesomeIcon icon={faMobile} />
        Get the app
      </a>
      <div className="nav-items">
        <div className="nav-item">Add Restaurant</div>
        <div className="nav-item">Log in</div>
        <div className="nav-item">Sign Up</div>
      </div>
    </nav>
  </div>
);

export default Nav;
