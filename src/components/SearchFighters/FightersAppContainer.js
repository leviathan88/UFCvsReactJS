import React, {Component} from 'react';
import 'whatwg-fetch';
import FighterApp from './FighterApp';
import { Link } from 'react-router';

const listStyle = {
  width: '22%',
  float: 'left'
}
const colorChampion = {
  color: 'gold'
}


class FightersAppContainer extends Component {
  constructor(){
    super();
    this.state={
      fighters: []
    };
  }

  componentDidMount(){
    fetch('./fighters.json')
    .then((response) => {
      if(response.ok)
        return response.json();
      else
         throw new Error("Server response wasn’t OK");
    })
    .then((responseData) => {
      this.setState({fighters: responseData});
    })
    .catch((error) => {
      this.props.history.pushState(null,'/error');
    });
  }

/*  render(){
    return (
      <FighterApp fighters={this.state.fighters.filter((fighter)=>fighter.weight_class==='Heavyweight')} />
    );
  }*/

  render() {
    let heavy = this.state.fighters.filter((fighter)=>fighter.weight_class==='Heavyweight');
    let middle = this.state.fighters.filter((fighter)=>fighter.weight_class==='Middleweight');
    let hFighters = heavy.map((fighter) => (
      <li key={fighter.id} style={listStyle}>
        <Link to={"/fighter/"+fighter.id}>{fighter.last_name}</Link>
      </li>
    ));
    let mFighters = middle.map((fighter) => (
      <li key={fighter.id} style={listStyle}>
        <Link to={"/fighter/"+fighter.id}>{fighter.last_name}</Link>
      </li>
    ));

    let child = this.props.children && React.cloneElement(this.props.children,
      { fighters: this.state.fighters }
    );
    return (
      <div className="container">
      <h1>Heavyweight</h1>
      <div className="row">
        <div className="col-md-6">
          <ul >
            {hFighters}
          </ul>
        </div>
        <div className="col-md-6">
          {child}
        </div>
      </div>
      <h1>Middleweight</h1>
      <div className="row">
        <div className="col-md-6">
          <ul >
            {mFighters}
          </ul>
        </div>
      </div>
     </div>
    );
  }
}

export default FightersAppContainer;
