import React from 'react';

const Competitors = () =>{
  return(
    <section className='competitors' style={{marginTop:100,height:'300px'}}>
      <h3 className='title text-center'>COMPETITORS?</h3>
      <div className='row'>
        <div className='col-md-3'></div>
        <div className='col-md-6' style={{marginTop:'50px'}}>
          <div className='card'>
            <div className='card-body'>
              <ul className='list-group list-group-flush'>
                <li className='list-group-item'>No one else is doing this today, with this focus and intensity.</li>
                <li className='list-group-item'>We have the advantage of cross platform fertilisation of ideas between channels</li>
              </ul>
            </div>
          </div>
        </div>
        <div className='col-md-3'></div>
      </div>
    </section>
  );
};

export default Competitors;
