require('normalize.css/normalize.css');
require('styles/App.css');
require('bootstrap/dist/css/bootstrap.css');

import React, {Component} from 'react';
import { Link } from 'react-router';

import Jumbo from './Jumbo';
import Footer from './Footer';

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
            <li><Link to="/" activeClassName="active">Home</Link></li>
            <li><Link to="/fighters" activeClassName="active">Fighters</Link></li>
            <li><Link to="/fights" activeClassName="active">Fights</Link></li>
          </ul>
          <h3 className="text-muted">Welcome to {name}</h3>
      </div>
        <Jumbo react={react} ufc={ufc} vs={vs}/>
        {this.props.children}
        <Footer />
      </div>
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
