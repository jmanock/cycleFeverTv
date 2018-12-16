import React,{Fragment} from 'react';
import Intro from './Sections/Intro';
import Agenda from './Sections/Agenda';
import Wwdaw from './Sections/Wwda';
import Motovation from './Sections/Motovation';
import Structure from './Sections/Structure';
import Channel from './Sections/Channel';
import Sponsorship from './Sections/Sponsorship';
import Competitors from './Sections/Competitors';
import About from './About';
import Calendar from './Calendar';
import Cftv from './Cftv';
import Rolling from './Rolling';
import Small from './Small';
import Cars from './Cars';
import './Main.css';

const Main = () =>{
  return(
    <Fragment>
      <Intro />
      <Agenda />
      <Wwdaw />
      <Motovation />
      <Structure />
      <Channel />
      <Sponsorship />
      <Competitors />
    </Fragment>
  );
};

export default Main;
