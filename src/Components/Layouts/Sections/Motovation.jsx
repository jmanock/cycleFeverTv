import React from 'react';

const Motovation = () =>{
  return(
    <section className='motovation' style={{marginTop:100, marginBottom:100,height:'500px'}}>
      <div className='row'>
        <div className='col-md-3'></div>
        <div className='col-md-6' style={{marginTop:'70px'}}>
          <div className='card'>
            <div className='card-body'>
              <h5 className='card-title text-center'>What Motovates Us?</h5>
              <ul className='list-group list-group-flush'>
                <li className='list-group-item'>We have over 40 years of TV production and presenting experience</li>
                <li className='list-group-item'>We want to do something different</li>
                <li className='list-group-item'>We want to meet a need from the community</li>
                <li className='list-group-item'>We want to provide a quality service</li>
                <li className='list-group-item'>We will follow the technology path for delivery (distribution)</li>
                <li className='list-group-item'>We are building on our following: Viewers, Followers, Fans</li>
              </ul>
            </div>
          </div>
        </div>
        <div className='col-md-3'></div>
      </div>
    </section>
  );
};

export default Motovation;
