import React, {Component, PropTypes} from 'react';
import FighterItem from './FighterItem';

class FighterList extends Component {
  render(){

    let filteredFighters = this.props.fighters.filter(
      (fighter)=>fighter.name.indexOf(this.props.filterText) !== -1
    );

    return(
      <ul>
        {filteredFighters.map(
          (fighter) => <FighterItem key={fighter.email}
                                    name={fighter.name}
                                    email={fighter.email} />
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
