import React from 'react';

class SearchBar extends React.Component {

  render() {
    return (
      <React.Fragment>
        <div className="search">
          <input type="text" class="searchTerm" placeholder="Ricerca un prodotto"></input>
          <button type="submit" className="searchButton">
            <i className="fa fa-search"></i>
          </button>
        </div>
      </React.Fragment>
    );
  }

}

export default SearchBar;
