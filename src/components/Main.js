require('normalize.css/normalize.css');
require('styles/App.css');

import React, {Component} from 'react';

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
          <a href="https://facebook.github.io/react/"><img src={react} alt="React" class="versus"/></a>
          <img src={vs} alt="React" class="versus" id="vs"/>
          <a href="https://ufc.com"><img src={ufc} alt="UFC" class="versus"/></a>
        </div>
        <div className="notice">
          <ListFighter name="Nate Diaz" country="US"/>
          <ListFighter name="Conor McGregor" country="Ireland"/>
          <ListFighter name="Vitor Belfort" country="Brazil"/>
        </div>
      </div>
    );
  }
}

class ListFighter extends Component {
  render() {
    return (
      <li>{this.props.name} from {this.props.country}</li>
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
