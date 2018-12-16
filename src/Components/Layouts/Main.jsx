import React,{Fragment} from 'react';
import Intro from './Sections/Intro';
import Agenda from './Sections/Agenda';
import Wwdaw from './Sections/Wwda';
import Motovation from './Sections/Motovation';
import Structure from './Sections/Structure';
import './Main.css';

const Main = () =>{
  return(
    <Fragment>
      <Intro />
      <Agenda />
      <Wwdaw />
      <Motovation />
      <Structure />
    </Fragment>
  );
};

export default Main;
