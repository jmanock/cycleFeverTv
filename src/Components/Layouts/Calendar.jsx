import React,{Component} from 'react';
import BigCalendar from 'react-big-calendar';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import moment from 'moment';

const localizer = BigCalendar.momentLocalizer(moment);

let navigate = {
  PREVIOUS:'PREV',
  NEXT:'NEXT',
  TODAY:'TODAY',
  DATE:'DATE'
};
let events = [
  {title:'Happy New Year', start:new Date(2019,0,1), end:new Date(2019,0,1)},
  {title:'Merry Christmas', start:new Date(2018,11,25), end:new Date(2018,11,25)}
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
        <span className='rbc-toolbar-label'>{label}</span>
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

const Calendar = props =>(
  <div>
    <BigCalendar localizer={localizer} events={events} popup startAccessor='start' endAccessor='end' className={props.calendarIsOpen ? 'open' : ''} components={{event:Event, toolbar:CustomToolbar}} style={{height:'100vh'}} eventPropGetter={(event,start,end,isSelected) => {
        let newStyle={backgroundColor:'red'}
        if(event.cars){newStyle.backgroundColor = 'grey'}
        if(event.bikes){newStyle.backgroundColor = 'orange'}
        return{className:'',style:newStyle}
      }}/>
  </div>
);

export default Calendar;
