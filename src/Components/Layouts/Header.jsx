import React from 'react';

const Header = () =>{
  return(
    <nav className='navbar navbar-expand-lg' style={{backgroundColor:'#333'}}>
      <a className='navbar-brand' href='#'>CFTV</a>
      <button className='navbar-toggler' type='button' data-toggle='collapse' data-target='#navbarSupportedContent' aria-controls='navbarSupportedContent' aria-expanded='false' aria-label='Toggle navigation'>
        <span className='navbar-toggler-icon'></span>
      </button>
      <div className='collapse navbar-collapse' id='navbarSupportedContent'>
        <ul className='navbar-nav mr-auto'>
          <li className='nav-item'><a href='#' className='nav-link'>Home</a></li>
          <li className='nav-item'><a href='#' className='nav-link'>Cars Tv</a></li>
          <li className='nav-item'><a href='#' className='nav-link'>Cycle Fever Tv</a></li>
          <li className='nav-item'><a href='#' className='nav-link'>Small Town America</a></li>
          <li className='nav-item'><a href='#' className='nav-link'>Rolling Media</a></li>
          <li className='nav-item'><a href='#' className='nav-link'>About</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
