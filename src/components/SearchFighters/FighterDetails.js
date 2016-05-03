import React, { Component } from 'react';
import 'whatwg-fetch';

class FighterDetails extends Component {
  constructor(){
     super(...arguments);
     this.state={
       repository:{}
     };
   }

  fetchData(id) {
    fetch('./fighters.json')
    .then((response) => response.json())
    .then((responseData) => {
      let fighterX = responseData.filter((fighter)=>fighter.id==id);
      console.log(fighterX);
      this.setState({fighter: fighterX});
    })
  }

   componentDidMount(){
     let fighter_id = this.props.params.id;
     this.fetchData(fighter_id)
   }

   componentWillReceiveProps(nextProps){
     let fighter_id= nextProps.params.id;
     this.fetchData(fighter_id)
   }

  render() {

    return(
      <div>
        <p>right said fred</p>
      </div>
    );
  }

}

export default FighterDetails;
