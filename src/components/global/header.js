import React from "react";

const Header = () => {
  return (
    <div className='header'>
      <div className='headerInner maxWidth'>
        <h1>Logo</h1>
        <div className='links'>
          <a href='/'>Link 1</a>
          <a href='/'>Link 2</a>
          <a href='/'>Link 3</a>
          <a href='/'>Link 4</a>
          <a href='/'>Link 5</a>
        </div>
        <button>Contact Us</button>
      </div>
    </div>
  );
};

export default Header;
