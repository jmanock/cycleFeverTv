import React,{Component} from 'react';
import YouTube from 'react-youtube';

class Youtube extends Component{
  videoOnReady(event){
    event.target.playVideoAt(50);
  }

  render(){
    const opts = {
      height:'390',
      width:'640',
      playerVars:{
        autoplay:1
      }
    }
    const {videoId} = this.props;
    return(
      <div className='container' style={{textAlign:'center',marginTop:50}}>
        <YouTube videoId={videoId} opts={opts} onReady={this.videoOnReady}/>
      </div>
    );
  }
};

export default Youtube;
