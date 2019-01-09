import React from 'react';
import Hank from '../../images/hank.jpg';
import Shawn from '../../images/shawn1.jpg';

const About = () =>{
  return(
    <section className='container' style={{marginTop:20}}>
      <div className='card'>
        <div className='card-body'>
          <h3 className='card-title text-center'>About</h3>
          <p className='card-text'>
            CycleFeverTV is a motocycle travel show with crazy hosts who want you to come along for the ride while they have fun and a few laughs! Join the Adventure and Enjoy the Ride! Follow us on our motorcycle travel adventures.
          </p>
          <h5 className='card-title text-center'>Motorcycle Enthusiast</h5>
          <p className='card-text'>
            Motorcycles, Cars, Travel, Live Events, and Live Concers! Episodes of CycleFeverTv live stream from the Ace every 2nd Thursday of the month @ 7:30pm EST sharp! Our history: in 1999, two public school teachers set out to re-discover the American road. With their wives permission of course. CycleFeverTV takes a ride across the country from the unique view of a motorcycle. Join our host, Hank Knapp and friends as they travel all around the highways and backroads of The United States experiencing motorcycle culture.
          </p>
        </div>
        <div className='row'>
          <div className='col-6'>
            <div className='card'>
              <div className='card-body aboutCard'>
                <img src={Hank} alt='Hank Knapp' style={{display:'block', marginLeft:'auto', marginRight:'auto',width:'50%'}}/>
                <h5 className='card-title text-center'>Hank</h5>
                <p className='card-text'>
                  CycleFeverTV's Executive Producer and one of the show's hosts, Hank Knapp is a former school teacher and television producer for 20 years and has been riding for over 55 years. "I've taken some great trips around the country like my Orlando, Florida to Tacoma, Washington ride along with many other trips of a lifetime." Some of them include the Grand Canyon, Lake George and Nashville accompanied by longtime friend and riding buddy Bill Young. Hank and Bill set out on the open road to create adventures of a lifetime... and they did!
                </p>
                <p className='card-text'>
                  Hank and Bill decided to take some time off from filming but Hank got the bug for the show once again, so he called Bill to see if he wanted to start shooting once more. Bill called back from the golf course and told Hank he had two reasons he wasn't ready to start filming. First, his golf clubs do not fit on a motorcycle and second, even if they did he couldn't because Shawn bought his bike... The things Shawn will do to get on the show! So Hank decided to move ahead with himself, Shawn(slong with Bill's bike), his buddy Gil and Shawn's bestfriend JD to begin a new adventure!
                </p>
              </div>
            </div>
          </div>
          <div className='col-6'>
            <div className='card'>
              <div className='card-body aboutCard'>
                <img src={Shawn} alt='Shawn Knapp' style={{display:'block', marginLeft:'auto', marginRight:'auto', width:'50%'}}/>
                <h5 className='card-title text-center'>Shawn</h5>
                <p className='card-text'>
                  Well with Shawn Knapp, the apple didn't fall far from the tree! He knew with his first ride sitting on his dad's gas tank up and down the streets in Rochester, New York that he was born to ride. Although he could never understand why there was only one motorcycle you ride and three in the basement in pieces. He started with his first dirt bike in the sixth grade when his mother finally gave in to his years of begging and has been riding ever since and started riding street bikes as soon as he got his restricted license. He actually loaned his first bike to JD in High School, and to this day he hasn't got the story from JD on what happend to it... and JD can't seem to remember! He loves hitting the open road with friends and family, his youngest daughter is his best co-pilot and won't let the motorcycle sit in the garage for longer than a week! "God only knows what will happen out and about with my dad, Gil and of course JD!" Like my dad says, he needs a riding partner with more common sense than he has on a bike!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
