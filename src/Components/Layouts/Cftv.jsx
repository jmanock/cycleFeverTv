import React from 'react';
import Calendar from './Calendar';
import Youtube from './Sections/Youtube';

const Cftv = () =>{
  return(
    <section className='cftv container'>
      <h1 className='title text-center'>Cycle Fever Tv</h1>
      <Youtube videoId='rMDTyjealdI' />
      <Calendar />
    </section>
  );
};

export default Cftv;
