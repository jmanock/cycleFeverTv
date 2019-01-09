import React from 'react';
import Calendar from './Calendar';
import Youtube from './Sections/Youtube';

const Cars = () =>{
  return(
    <section className='carsTv container'>
      <h1 className='title text-center'>Cars TV</h1>
      <Youtube videoId='zNTZLKy3KbA' />
      <Calendar />
    </section>
  );
};

export default Cars;
