import React, {Component} from 'react';
import render from 'react-dom';

class Search extends Component {
  constructor() {
    super();
    this.state = {
      searchTerm: 'Zagreb Arena'
    }
  }

  handleChange(event) {
   this.setState({searchTerm: event.target.value});
 }


  render() {
    return (
      <div>
        Search : <input type="search" value={this.state.searchTerm} onChange={this.handleChange.bind(this)} />
      </div>
    );
  }
}

export default Search;
