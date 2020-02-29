import React  from 'react';
import SearchBar from './SearchBar';

class Header extends React.Component {

  render () {
    
    return (
      <React.Fragment>
        <header className="App-header">
          <h1>do-nut</h1>
          <SearchBar />
        </header>
      </React.Fragment>
    );
  }
}

export default Header;
