import React from 'react';

const Agenda = () =>{
  return(
    <section className='agenda container' style={{height:'50vh',marginTop:100}}>
      <div className='row'>
        <div className='col-sm-6'>
          <div className='card'>
            <div className='card-body'>
              <h5 className='card-title text-center'>OFFERING VALUE CFTV</h5>
              <ul className='list-group list-group-flush'>
                <li className='list-group-item'>Cycle Fever Tv</li>
                <li className='list-group-item'>Cars Tv</li>
                <li className='list-group-item'>Small Town America Tv</li>
                <li className='list-group-item'>Rolling Media Channel</li>
              </ul>
            </div>
          </div>
        </div>
        <div className='col-sm-6'>
          <div className='card'>
            <div className='card-body'>
              <h5 className='card-title text-center'>AGENDA</h5>
              <ul className='list-group list-group-flush'>
                <li className='list-group-item'>What We Do, and Why</li>
                <li className='list-group-item'>The Big Picture</li>
                <li className='list-group-item'>The Journey There</li>
                <li className='list-group-item'>How you can join us</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Agenda;
