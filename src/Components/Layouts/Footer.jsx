import React from 'react';

const Footer = () =>{
  return(
    <footer className='page-footer' style={{backgroundColor:'#333'}}>
      <ul className='nav justify-content-center'>
        <li className='nav-link'>&copy;2018 CycleFeverTV</li>
        <li className='nav-item'>
          <a href='https://www.facebook.com/CycleFeverTV/' target='_blank' className='nav-link'><i className='fab fa-facebook-f'></i></a>
        </li>
        <li className='nav-item'>
          <a href='https://twitter.com/CycleFeverTV' target='_blank' className='nav-link'><i className='fab fa-twitter'></i></a>
        </li>
        <li className='nav-item'>
          <a href='https://www.instagram.com/cyclefevertv/' target='_blank' className='nav-link'><i className='fab fa-instagram'></i></a>
        </li>
        <li className='nav-item'>
          <a href='https://www.youtube.com/channel/UC5lBCpUunSuN3lCxxTfkunA' className='nav-link' target='_blank'><i className='fab fa-youtube'></i></a>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
