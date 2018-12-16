import React from 'react';

const Sponsorship = () =>{
  return(
    <section className='sponsorship container' style={{marginTop:100}}>
      <h3 className='title text-center'>SPONSORSHIP PACKAGES <br/> YOUR VALUE FOR ROLLING CONTENT CHANNEL</h3>
      <div className='row'>
        <div className='col-md-1'></div>
        <div className='col-md-10'>
          <div className='card'>
            <div className='card-body'>
              <p className='card-text'>Rolling Content video stream - 12 hours a day. Content to be provided from current events and archive footage owned by CFTV</p>
              <p className='card-text'>16 (30 second) commercials will be shown per hour. Each `customer` advert will be shown once per hour 12 times a day.</p>
              <ul className='list-group list-group-flush'>
                <li className='list-group-item'>Commitment of one month - $75 a week ($300)</li>
                <li className='list-group-item'>Commitment of two months - $50 a week ($400)</li>
                <li className='list-group-item'>Commitment of three months - $40 a week ($480)</li>
              </ul>
              <p className='card-text'>To make an advert typically costs $250 - $400, depending on complexity and can be produced on a time and materials basis.</p>
            </div>
          </div>
        </div>
        <div className='col-md-1'></div>
      </div>
    </section>
  );
};

export default Sponsorship;
