import React from 'react';
import Data from '../data.json';

class Body extends React.Component {

  render() {
    return (
      <React.Fragment>
        <div className="container">
          <ul>
            <li>Item 1</li>
            <li>Item 2</li>
            <li>Item 3</li>
            <li>Item 4</li>
            <li>Item 5</li>
            <li>Item 6</li>
            <li>Item 7</li>
            <li>Item 8</li>
          </ul>
        </div>
      </React.Fragment>
    );
  }

}

export default Body;
