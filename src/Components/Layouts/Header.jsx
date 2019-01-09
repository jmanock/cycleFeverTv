import React from 'react';
import {Link, withRouter} from 'react-router-dom';
const Header = () =>{
  return(
    <nav className='navbar navbar-expand-lg navbar-dark' style={{backgroundColor:'#333'}}>
      <Link to='/' className='navbar-brand'>CFTV</Link>
      <button className='navbar-toggler' type='button' data-toggle='collapse' data-target='#navbarSupportedContent' aria-controls='navbarSupportedContent' aria-expanded='false' aria-label='Toggle navigation'>
        <span className='navbar-toggler-icon'></span>
      </button>
      <div className='collapse navbar-collapse' id='navbarSupportedContent'>
        <ul className='navbar-nav mr-auto'>
          <li className='nav-item'><Link to='/CarsTv' className='nav-link'>Cars TV</Link></li>
          <li className='nav-item'><Link to='/RollingChannel' className='nav-link'>Rolling Media</Link></li>
          <li className='nav-item'><Link to='/SmallTownAmerica' className='nav-link'>Small Town America</Link></li>
          <li className='nav-item'><Link to='/CycleFeverTv' className='nav-link'>Cycle Fever TV</Link></li>
          <li className='nav-item'><Link to='/About' className='nav-link'>About</Link></li>
        </ul>
      </div>
    </nav>
  );
};

export default withRouter(Header);
