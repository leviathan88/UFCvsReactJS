import React, { Component } from 'react';
import 'whatwg-fetch';

class FighterDetails extends Component {
  renderFighters() {
      let fighter = this.props.fighters.find((fighter)=>fighter.id == this.props.params.id);
      return(
        <div>
          <h2>{fighter.first_name} {fighter.last_name}</h2>
          <h4><mark>{fighter.wins} {fighter.losses} {fighter.draws}</mark></h4>          
        </div>
      );
    }

    render() {
        if(this.props.fighters.length > 0 ){
          return this.renderFighters();
        } else {
          return <h4>Loading...</h4>;
        }
      }

}

export default FighterDetails;
