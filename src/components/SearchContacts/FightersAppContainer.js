import React, {Component, PropTypes} from 'react';
import { render } from 'react-dom';
import 'whatwg-fetch';
import FightersApp from './FighterApp';

class FightersAppContainer extends Component {
  constructor() {
    super();
    this.fighters = [];
  }

  //invoked once immediatley after initial rendering occurs
  componentDidMount() {
    fetch('./fighters.sjon')
      .then(response=>response.json())
      .then(responseData=> {
        this.setState({fighters: responseData});
      })
      .catch(error=> {
        console.log("Error fetching our data", error);
      })
  }

  render() {
    return (
      <FighersApp fighters={this.state.fighters}/>
    );
  }

}
