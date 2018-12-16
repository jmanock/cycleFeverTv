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
      <About />
      <Calendar />
    </Fragment>
  );
};

export default Main;
