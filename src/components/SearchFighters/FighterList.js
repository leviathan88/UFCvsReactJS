import React, {Component, PropTypes} from 'react';
import FighterItem from './FighterItem';

class FighterList extends Component {
  render(){

    let filteredFighters = this.props.fighters.filter(
      (fighter)=>fighter.last_name.indexOf(this.props.filterText) !== -1
    );

    return(
      <ul>
        {filteredFighters.map(
          (fighter) => <FighterItem first_name={fighter.first_name}
                                    last_name={fighter.last_name}
                                     />
        )}
      </ul>
    )
  }
}
FighterList.propTypes = {
  fighters: PropTypes.arrayOf(PropTypes.object),
  filterText: PropTypes.string
}

export default FighterList;
