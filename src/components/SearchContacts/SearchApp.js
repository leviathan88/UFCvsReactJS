import React, {Component, PropTypes} from 'react';
import SearchBar from './SearchBar';
import ContactList from './ContactList';

let contacts = [
  { name: "Cassio Zen", email: "cassiozen@gmail.com" },
  { name: "Dan Abramov", email: "gaearon@somewhere.com" },
  { name: "Pete Hunt", email: "floydophone@somewhere.com" },
  { name: "Paul O’Shannessy", email: "zpao@somewhere.com" },
  { name: "Ryan Florence", email: "rpflorence@somewhere.com" },
  { name: "Sebastian Markbage", email: "sebmarkbage@here.com" }
]


class SearchApp extends Component {

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
        <ContactList contacts={contacts} filterText={this.state.filterText} />
      </div>
    );
  }
}

SearchApp.propTypes = {
  contacts: PropTypes.arrayOf(PropTypes.object)
}

export default SearchApp;
