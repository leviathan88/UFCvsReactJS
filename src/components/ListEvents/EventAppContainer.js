import React, {Component} from 'react';
import 'whatwg-fetch';
import List from './List';

const API_URL = 'http://ufc-data-api.ufc.com/api/v1/us/events';
const API_HEADERS = {'Content-Type':'application/json', 'Authorization': 'any color blue'};

class EventAppContainer extends Component {
  constructor() {
    super(...arguments);
    this.state = {
      events: []
    }
  }

  componentDidMount(){
    fetch('./events.json')
    .then((response) => response.json())
    .then((responseData) => {
      this.setState({events: responseData});
    })
    .catch((error) => {
      console.log('Error fetching and parsing data', error);
    });
  }

  render() {
    return(
      <div className="app row">
        <div className="col-xs-6">
          <List title='PPV' events={this.state.events.filter((event)=> event.subtitle==='Live on Pay-Per-View')}/>
          <List title='FS1 Shows' events={this.state.events.filter((event)=> event.subtitle==='FS1')}/>
        </div>
        <div className="col-xs-6">
          <List title='FS1 Live Shows' events={this.state.events.filter((event)=> event.subtitle==='Live on FS1')}/>
          <List title='Fight Pass Shows' events={this.state.events.filter((event)=> event.subtitle==='Live on UFC FIGHT PASS')}/>
        </div>
      </div>
    );
  }

}

export default EventAppContainer;
