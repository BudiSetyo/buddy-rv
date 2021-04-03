import React from 'react';
import Burger from '@/assets/images/navbar/burger-icon.png';

import './style.scss';

const index = ({ toggle }) => (
  <nav className="navbar background--blue flex flex--align-center">
    <button onClick={() => { toggle(); }} type="button">
      <img className="burger" src={Burger} alt="burger-icon" style={{ margin: '0' }} />
    </button>
  </nav>
);

export default index;
