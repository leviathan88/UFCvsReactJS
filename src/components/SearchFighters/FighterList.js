import React, {Component, PropTypes} from 'react';
import { Link } from 'react-router';


class FighterList extends Component {
  render(){

    let filteredFighters = this.props.fighters.filter(
      (fighter)=>fighter.last_name.indexOf(this.props.filterText) !== -1
    );

    let fighters = filteredFighters.map((fighter)=> (
      <li key={fighter.id}>
        <Link to={"/fighters/details/"+fighter.id}>{fighter.last_name} - {fighter.first_name}</Link>
      </li>
    ))

    return(
      <div>
        <h2>Fighters</h2>
        <ul>{fighters}</ul>
        {this.props.children}
      </div>
    )
  }
}
FighterList.propTypes = {
  fighters: PropTypes.arrayOf(PropTypes.object),
  filterText: PropTypes.string
}

export default FighterList;
