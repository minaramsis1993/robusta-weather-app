import React from 'react';
import HeaderStyles from './index.module.css';

const Header = () => {
  return (
    <div className={HeaderStyles.Header}>
      <h1>instaweather</h1>
      <div className="btns-wrapper">
        <button>C</button>
        <button className={HeaderStyles.Activated}>F</button>
      </div>
    </div>
  );
};

export default Header;
