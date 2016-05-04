import React, {Component, PropTypes} from 'react';

class FighterItem extends Component {
  render() {
    return <li>{this.props.last_name} - {this.props.first_name}</li>
  }
}
FighterItem.propTypes = {
  last_name: PropTypes.string.isRequired,
  first_name: PropTypes.string.isRequired
}

export default FighterItem;
