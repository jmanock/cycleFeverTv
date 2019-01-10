import React,{Component,Fragment} from 'react';
import BigCalendar from 'react-big-calendar';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import moment from 'moment';
import dunder from '../../images/dunder.jpg';
import Events from './Events';

const localizer = BigCalendar.momentLocalizer(moment);

let navigate = {
  PREVIOUS:'PREV',
  NEXT:'NEXT',
  TODAY:'TODAY',
  DATE:'DATE'
};

const something = <a href='#id'><img src={dunder} alt='Dunder Logo' className='dunder'></img></a>
let events = [
  {title:'Happy New Year', start:new Date(2019,0,1), end:new Date(2019,0,1)},
  {title:'Merry Christmas', start:new Date(2018,11,25), end:new Date(2018,11,25)},
  {title:something,start:new Date(2018,11,30),end:new Date(2019,0,1)}
];

function Event({event}){
  return(
    <span>
      <strong className='eventTitle'>{event.title}</strong>
      <small className='eventTime'>{event.time}</small>
    </span>
  );
};

class CustomToolbar extends Component{
  render(){
    let {localizer:{message},label} = this.props;

    return(
      <div className='rbc-toolbar'>
        <span className='rbc-btn-group'>
          <button type='button' onClick={this.navigate.bind(null, navigate.PREVIOUS)} className='icon'><i className='fas fa-chevron-left'></i></button>
        </span>
        <span className='rbc-toolbar-label'>{label} {message}</span>
        <span className='rbc-btn-group'>
          <button type='button' onClick={this.navigate.bind(null, navigate.NEXT)} className='icon'><i className='fas fa-chevron-right'></i></button>
        </span>
      </div>
    );
  }
  navigate = action =>{
    this.props.onNavigate(action);
  }
}

const Calendar = props =>{
  return(
    <Fragment>
      <h1 className='title text-center'>Rolling Media TV</h1>
      <div style={{marginTop:100}} className='container calendar'>
        <BigCalendar localizer={localizer} events={events} popup startAccessor='start' endAccessor='end' className={props.calendarIsOpen ? 'open' : ''} components={{event:Event, toolbar:CustomToolbar}} style={{height:'100vh'}} eventPropGetter={(event,start,end,isSelected) => {
            let newStyle={backgroundColor:'red'}
              if(event.title === something){
                newStyle={backgroundColor:'transparent'}
              }
            return{className:'',style:newStyle}
          }}/>
      </div>
    </Fragment>

  )
};

export default Calendar;
