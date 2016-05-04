import React, { Component } from 'react';
import 'whatwg-fetch';

const colorFighter = {
  color: 'gray'
}

const colorChampion = {
  color: 'gold'
}

const hidden = {
  visibility: 'hidden'
}


class FighterDetails extends Component {
  renderFighters() {
      let fighter = this.props.fighters.find((fighter)=>fighter.id == this.props.params.id);
      return(
        <div>
          <p style={fighter.title_holder ? colorChampion : hidden}>The Champ</p>
          <h2 style={fighter.title_holder ? colorChampion : colorFighter} >{fighter.first_name} {fighter.last_name}</h2>
          <h4><mark>{fighter.wins} {fighter.losses} {fighter.draws}</mark></h4>
          <img src={fighter.thumbnail}/>
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
