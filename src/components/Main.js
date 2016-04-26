require('normalize.css/normalize.css');
require('styles/App.css');
require('bootstrap/dist/css/bootstrap.css');
import React, {Component} from 'react';
import List from './List';

let react = 'https://assets.toptal.io/uploads/blog/category/logo/291/react.png';
let name = 'UFC Spy';
let ufc = 'http://www.mmarecap.com/wp-content/uploads/2009/09/UFC-LOGO-3.jpg';
let vs = 'https://s3.amazonaws.com/applause-devmktg/2015/12/02/5gs8428lyf_VS.png';

class AppComponent extends Component {
  render() {
    return (
      <div className="container index">
        <div className="header">
          <ul className="nav nav-pills pull-right">
            <li claclassNamess="active"><a href="#">Home</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
          <h3 className="text-muted">Welcome to {name}</h3>
      </div>

      <div className="jumbotron row">
        <div id="images" className>
          <a href="https://facebook.github.io/react/"><img src={react} alt="React" className="versus"/></a>
          <img src={vs} alt="React" className="versus" id="vs"/>
          <a href="https://ufc.com"><img src={ufc} alt="UFC" className="versus"/></a>
        </div>
      </div>

        <div className="app row">
          <div className="col-xs-6">
            <List id='ppv' title='PPV' events={this.props.events.filter((event)=> event.subtitle==='Live on Pay-Per-View')}/>
            <List id='fs1' title='FS1 Shows' events={this.props.events.filter((event)=> event.subtitle==='FS1')}/>
          </div>
          <div className="col-xs-6">
            <List id='fs1-live' title='FS1 Live Shows' events={this.props.events.filter((event)=> event.subtitle==='Live on FS1')}/>
            <List id='fpass' title='Fight Pass Shows' events={this.props.events.filter((event)=> event.subtitle==='Live on UFC FIGHT PASS')}/>
          </div>
        </div>
      </div>
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
