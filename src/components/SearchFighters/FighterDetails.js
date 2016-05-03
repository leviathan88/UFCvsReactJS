import React, { Component } from 'react';
import 'whatwg-fetch';

class FighterDetails extends Component {
  renderFighters() {
      let fighter = this.props.fighters.find((fighter)=>fighter.id == this.props.params.id);
      return(
        <div>
          <h2>{fighter.wins}</h2>
          <p>jesam</p>
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
