import React, {Component, PropTypes} from 'react';

class Header extends Component {
  render() {
    return (
      <div className="header">
        <ul className="nav nav-pills pull-right">
          <li claclassNamess="active"><a href="#">Home</a></li>
          <li><a href="#/fights">Fights</a></li>
          <li><a href="#/fighters">Fighters</a></li>
        </ul>
        <h3 className="text-muted">Welcome to {this.props.name}</h3>
    </div>
    )
  }
}

Header.propTypes = {
  name: PropTypes.string.isRequired
};

export default Header;
