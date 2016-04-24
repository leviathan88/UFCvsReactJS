import React, {Component} from 'react';
import Time from 'react-time'

class Event extends Component {
  render() {
    return(
      <div className="event">
        <div className="event_title">{this.props.arena}</div>
        <div> <Time value={this.props.event_date} format="YYYY/MM/DD" /></div>
        <div><img src={this.props.img}/></div>
        <div className="event_details">{this.props.desc}</div>
      </div>
    );
  }
}

export default Event;
