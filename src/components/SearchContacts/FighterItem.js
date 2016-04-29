import React, {Component, PropTypes} from 'react';

class FighterItem extends Component {
  render() {
    return <li>{this.props.name} - {this.props.email}</li>
  }
}
FighterItem.propTypes = {
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired
}

export default FighterItem;
