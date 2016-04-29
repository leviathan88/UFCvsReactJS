require('normalize.css/normalize.css');
require('styles/App.css');
require('bootstrap/dist/css/bootstrap.css');

import React, {Component} from 'react';
import Header from './Header';
import Jumbo from './Jumbo';
import EventAppContainer from './ListEvents/EventAppContainer';

let react = 'https://assets.toptal.io/uploads/blog/category/logo/291/react.png';
let name = 'UFC Spy';
let ufc = 'http://www.mmarecap.com/wp-content/uploads/2009/09/UFC-LOGO-3.jpg';
let vs = 'https://s3.amazonaws.com/applause-devmktg/2015/12/02/5gs8428lyf_VS.png';

class AppComponent extends Component {
  render() {
    return (
      <div className="container index">
        <Header name={name}/>
        <Jumbo react={react} ufc={ufc} vs={vs}/>
        <EventAppContainer />
      </div>
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
