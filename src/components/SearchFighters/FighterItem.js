import React, {Component, PropTypes} from 'react';
import { Link } from 'react-router';

class FighterItem extends Component {
  render() {
    return(
      <div>
        <li><Link to={"/fighters/details/"+this.props.id}>{this.props.last_name} - {this.props.first_name}</Link></li>
        <div>{this.props.children}</div>      
      </div>
    );
  }
}
FighterItem.propTypes = {
  id: PropTypes.number.isRequired,
  last_name: PropTypes.string.isRequired,
  first_name: PropTypes.string.isRequired
}

export default FighterItem;
