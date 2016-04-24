require('normalize.css/normalize.css');
require('styles/App.css');
import React, {Component} from 'react';
import List from './List';

let react = 'https://assets.toptal.io/uploads/blog/category/logo/291/react.png';
let name = 'UFC 197';
let ufc = 'http://www.mmarecap.com/wp-content/uploads/2009/09/UFC-LOGO-3.jpg';
let vs = 'https://s3.amazonaws.com/applause-devmktg/2015/12/02/5gs8428lyf_VS.png';

class AppComponent extends Component {
  render() {
    return (
      <div className="index">
        <h1>Welcome to Distreacter! meets {name}</h1>
        <div id="images">
          <a href="https://facebook.github.io/react/"><img src={react} alt="React" className="versus"/></a>
          <img src={vs} alt="React" className="versus" id="vs"/>
          <a href="https://ufc.com"><img src={ufc} alt="UFC" className="versus"/></a>
        </div>
        <div className="app">
          <List id='ppv' title='PPV' events={this.props.events.filter((event)=> event.subtitle==='Live on Pay-Per-View')}/>
          <List id='fs1' title='FS1 Shows' events={this.props.events.filter((event)=> event.subtitle==='FS1')}/>
          <List id='fs1-live' title='FS1 Live Shows' events={this.props.events.filter((event)=> event.subtitle==='Live on FS1')}/>
          <List id='fpass' title='Fight Pass Shows' events={this.props.events.filter((event)=> event.subtitle==='Live on UFC FIGHT PASS')}/>
        </div>
      </div>

    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
