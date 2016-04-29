import React, {Component} from 'react';
import 'whatwg-fetch';
import FighterApp from './FighterApp';

class FightersAppContainer extends Component {
  constructor(){
    super();
    this.state={
      fighters: []
    };
  }

  componentDidMount(){
    fetch('./fighters.json')
    .then((response) => response.json())
    .then((responseData) => {
      this.setState({fighters: responseData});
    })
    .catch((error) => {
      console.log('Error fetching and parsing data', error);
    });
  }

  render(){
    return (
      <FighterApp fighters={this.state.fighters} />
    );
  }
}

export default FightersAppContainer;
