import React from 'react';
import greenPepper from '../../../images/greenPepppercopy.png';

const Wwdaw = () =>{
  return(
    <section className='wwdaw container'>
      <h3 className='title text-center'>WHAT WE DO, AND WHY</h3>
      <div className='row'>
        <div className='col-sm-4'>
          <div className='card'>
            <img className='card-img-top greenPepper' src={greenPepper} alt='Green Pepper Img'/>
            <div className='card-body'>
              <h5 className='card-title'></h5>
              <ul className='list-group list-group-flush' style={{marginTop:'30px'}}>
                <li className='list-group-item'>Provide local resource information in a video magazine format</li>
              </ul>
            </div>
          </div>
        </div>
        <div className='col-sm-4'>
          <div className='card'>
            <img className='card-img-top greenPepper' src={greenPepper} alt='Green Pepper Img'/>
            <div className='card-body'>
              <h5 className='card-title'></h5>
              <ul className='list-group list-group-flush' style={{marginTop:'30px'}}>
                <li className='list-group-item'>Provide a platform to advertise products, events, and locations to key known audience</li>
              </ul>
            </div>
          </div>
        </div>
        <div className='col-sm-4'>
          <div className='card'>
            <img className='card-img-top greenPepper' src={greenPepper} alt='Green Pepper Img'/>
            <div className='card-body'>
              <h5 className='card-title'></h5>
              <ul className='list-group list-group-flush'>
                <li className='list-group-item'>Create partnership with key compainies who have a shared ethos</li>
                <li className='list-group-item'>In the future, we will bring on more platforms and more outlets to bring the message to a greater audience</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Wwdaw;
