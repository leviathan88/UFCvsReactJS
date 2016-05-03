import React, {Component, PropTypes} from 'react';
import { Link } from 'react-router';

class Header extends Component {
  render() {
    return (
      <div className="header">
        <ul className="nav nav-pills pull-right">
          <li className="active"><Link to="#">Home</Link></li>
          <li><Link to="/fighters">Fighters</Link></li>
          <li><Link to="/fights">Fights</Link></li>          
        </ul>
        <h3 className="text-muted">Welcome to {this.props.name}</h3>
        {this.props.children}
    </div>
    )
  }
}

Header.propTypes = {
  name: PropTypes.string.isRequired
};

export default Header;
