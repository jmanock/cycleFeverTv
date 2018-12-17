import React from 'react';
import Calendar from './Calendar';

const Small = () =>{
  return(
    <section className='smallTown container'>
      <h1 className='title text-center'>Small Town America</h1>
      <h3 style={{color:'#fff'}} className='text-center'>Coming Soon</h3>
      <Calendar />
    </section>
  );
};

export default Small;
