import React, {Component} from 'react';
import 'whatwg-fetch';
import FighterApp from './FighterApp';
import { Link } from 'react-router';

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

/*  render(){
    return (
      <FighterApp fighters={this.state.fighters.filter((fighter)=>fighter.weight_class==='Heavyweight')} />
    );
  }*/

  render() {
    let heavy = this.state.fighters.filter((fighter)=>fighter.weight_class==='Heavyweight');
   let fighters = heavy.map((fighter) => (
     <li key={fighter.id}>
       <Link to={"/fighter/"+fighter.id}>{fighter.last_name}</Link>
     </li>
   ));

   let child = this.props.children && React.cloneElement(this.props.children,
      { fighters: this.state.fighters }
    );
   return (
     <div>
     <h1>Heavyweights</h1>
     <ul>
       {fighters}
     </ul>
     {child}
     </div>
   );
 }
}

export default FightersAppContainer;
