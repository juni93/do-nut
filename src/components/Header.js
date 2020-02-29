import React from 'react';
import SearchBar from './SearchBar';

class Header extends React.Component {

  render() {

    return (
      <React.Fragment>
        <header>
          <h1 className="title">do-nut</h1>
          <div className="App-header">
            <SearchBar />
          </div>
        </header>
      </React.Fragment>
    );
  }
}

export default Header;
