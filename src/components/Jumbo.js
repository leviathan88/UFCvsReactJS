import React, {Component, PropTypes} from 'react';

class Jumbo extends Component {
  render() {
    return (
      <div className="jumbotron row">
        <div id="images">
          <a href="https://facebook.github.io/react/"><img src={this.props.react} alt="React" className="versus2"/></a>
          <img src={this.props.vs} alt="React" className="versus" id="vs"/>
          <a href="https://ufc.com"><img src={this.props.ufc} alt="UFC" className="versus2"/></a>
        </div>
      </div>
    );
  }
}

Jumbo.propTypes = {
  react: PropTypes.string.isRequired,
  vs: PropTypes.string.isRequired,
  ufc: PropTypes.string.isRequired
}

export default Jumbo;
