import React, {Component, PropTypes} from 'react';
import { Link } from 'react-router';


class FighterList extends Component {
  render(){

    let filteredFighters = this.props.fighters.filter(
      (fighter)=>fighter.last_name.indexOf(this.props.filterText) !== -1
    );

    let fighters = filteredFighters.map((fighter)=> (
      <li key={fighter.id}>
        <Link to={"/fighter/"+fighter.id}>{fighter.last_name} - {fighter.first_name}</Link>
      </li>
    ));

    let child = this.props.children && React.cloneElement(this.props.children,
     { fighters: this.props.fighters }
   );

    return(
      <div>
        <h2>Fighters</h2>
        <ul>{fighters}</ul>
        {child}
      </div>
    )
  }
}
FighterList.propTypes = {
  fighters: PropTypes.arrayOf(PropTypes.object),
  filterText: PropTypes.string
}

export default FighterList;
