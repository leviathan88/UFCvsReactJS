require('normalize.css/normalize.css');
require('styles/App.css');
require('bootstrap/dist/css/bootstrap.css');

import React, {Component} from 'react';

import Header from './Header';
import Jumbo from './Jumbo';
import Footer from './Footer';

import EventAppContainer from './ListEvents/EventAppContainer';
import FightersAppContainer from './SearchFighters/FightersAppContainer';
import FightApp from './DnDFights/FightsApp';

let react = 'https://assets.toptal.io/uploads/blog/category/logo/291/react.png';
let name = 'UFC Spy';
let ufc = 'http://www.mmarecap.com/wp-content/uploads/2009/09/UFC-LOGO-3.jpg';
let vs = 'https://s3.amazonaws.com/applause-devmktg/2015/12/02/5gs8428lyf_VS.png';

class AppComponent extends Component {
  constructor() {
    super(...arguments);
    this.state= {
      route: window.location.hash.substr(1)
    };
  }

  componentDidMount() {
    window.addEventListener('hashchange', () => {
      this.setState({
        route: window.location.hash.substr(1)
      });
    });
  }

  render() {
    let Child;
    switch(this.state.route) {
      case '/fights': Child=FightApp; break;
      case '/fighters': Child=FightersAppContainer; break;
      default: Child=EventAppContainer;
    }
    return (
      <div className="container index">
        <Header name={name}/>
        <Jumbo react={react} ufc={ufc} vs={vs}/>
        <Child />
        <Footer />
      </div>
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
