import React, {Component, PropTypes} from 'react';
import Time from 'react-time'

//our own propType
let arenaPropType = (props, propName, componentName) => {
  if(props[propName]) {
    let value = props[propName];
    if(value!=='string' || value.lengh > 80) {
      return new Error(
        `${propName} in ${componentName} is longer than 80 characters`
      );
    }
  }
}

class Event extends Component {
  constructor() {
    super(...arguments);
    this.state = {
      showDetails: false
    };
  }

  toggleDetails() {
    this.setState({showDetails: !this.state.showDetails});
  }

  render() {
    let eventDetails;
    if(this.state.showDetails) {
      eventDetails = (
        <div onClick={this.toggleDetails.bind(this)}>
          <div><img src={this.props.img}/></div>
          <div className="text-primary">{this.props.desc}</div>
        </div>
      );
    }

    return(
      <div className="event">
        <div className="event_details" onClick={this.toggleDetails.bind(this)}>
        <div className={this.state.showDetails ? "glyphicon glyphicon-chevron-up" : "glyphicon glyphicon-chevron-down" }>
        </div>  Arena: <strong>{this.props.arena}</strong>
          <p>Date: <Time value={this.props.event_date} format="YYYY/MM/DD" /></p>
        </div>
        {eventDetails}
      </div>
    );
  }
}

Event.propTypes = {
  arena: arenaPropType,
  img: PropTypes.string,
  event_date: PropTypes.instanceOf(Date),
  desc: PropTypes.string
};

export default Event;
