import React, {Component} from 'react';
import Event from './Event';

class List extends Component {
  render() {
    var events = this.props.events.map((event)=> {
      return <Event id={event.id}
                    event_date={event.event_date}
                    desc = {event.short_description}
                    img = {event.feature_image}
                    arena = {event.arena}/>
    });
    return(
      <div className="list">
        <h1>{this.props.title}</h1>
        {events}
      </div>
    );
  }
}

export default List;
