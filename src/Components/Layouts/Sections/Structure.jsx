import React from 'react';

const Structure = () =>{
  return(
    <section className='structure'>
      <h3 className='title text-center'>CFTV - THE STRUCTURE</h3>
      <div className='row container'>
        <div className='col-sm-2 col-md-1'>
          <div className='cftvSign'>
            <h5>CFTV</h5>
          </div>
        </div>
        <div className='col-sm-10 col-md-5'>
          <div className='card' style={{marginBottom:20}}>
            <div className='card-body'>
              <h5 className='card-title text-center'>Cycle Fever Tv</h5>
            </div>
          </div>
          <div className='card' style={{marginBottom:20}}>
            <div className='card-body'>
              <h5 className='card-title text-center'>Porsche Tv</h5>
            </div>
          </div>
          <div className='card'>
            <div className='card-body'>
              <h5 className='card-title text-center'>Small Town America Tv</h5>
            </div>
          </div>
        </div>
        <div className='col-sm-12 col-md-6'>
          <div className='card'>
            <div className='card-body'>
              <ul className='list-group list-group-flush'>
                <li className='list-group-item'>EVENTS: Rides, meetups, dealerships</li>
                <li className='list-group-item'>LOCATIONS: Where to go what todo</li>
                <li className='list-group-item'>INTERVIEWS: Who is who and what they do</li>
                <li className='list-group-item'>TRIPS: Document day trips of interest</li>
                <li className='list-group-item'>HOLIDAYS: Socument holidays and things todo</li>
                <li className='list-group-item'>ENDORSED PRODUCTS: Sponsor products</li>
                <li className='list-group-item'>ROLLING MEDIA CHANNEL: Includes all the above</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Structure;
