import React, {Component, PropTypes} from 'react';
import SearchBar from './SearchBar';
import FighterList from './FighterList';

class FighterApp extends Component {

  constructor() {
    super();
    this.state = {
      filterText: ``
    }
  }

  //you create a local function to change the filterText state and pass this function down as a prop to the searchBar
  handleUserInput(searchTerm) {
    this.setState({filterText: searchTerm});
  }

  render() {
    return (
      <div>
        <SearchBar filterText={this.state.filterText} onUserInput={this.handleUserInput.bind(this)} />
        <FighterList fighters={this.props.fighters} filterText={this.state.filterText} />
      </div>
    );
  }
}

FighterApp.propTypes = {
  fighters: PropTypes.arrayOf(PropTypes.object)
}

export default FighterApp;
