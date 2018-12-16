import React from 'react';

const Channel = () =>{
  return(
    <section className='channel container' style={{marginTop:100}}>
      <h3 className='title text-center'>CHANNEL SPONSORSHIP PACKAGES</h3>
      <div className='card-group'>
        <div className='card'>
          <div className='card-body'>
            <h5 className='card-title text-center'>Package One</h5>
            <ul className='list-group list-group-flush'>
              <li className='list-group-item'>10k Initial Investment</li>
              <li className='list-group-item'>Extra 1k per episode with > 10,000 views</li>
              <li className='list-group-item'>Product/Service covered in 5 episodes - Included if reached below 10,000 views</li>
              <li className='list-group-item'>Special offers available to viewers</li>
            </ul>
          </div>
        </div>
        <div className='card'>
          <div className='card-body'>
            <h5 className='card-title text-center'>Package Two</h5>
            <ul className='list-group list-group-flush'>
              <li className='list-group-item'>100k Investment</li>
              <li className='list-group-item'>Product/Service covered in 20 episodes</li>
              <li className='list-group-item'>Three interviews and product demonstrations created</li>
              <li className='list-group-item'>Monthly updates and tweaks</li>
              <li className='list-group-item'>Strategic plan for sponsors</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Channel;
