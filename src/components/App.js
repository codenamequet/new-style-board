import React, { Component } from 'react';
import Accessories from './Accessories'
import Shirts from './Shirts'
import Pants from './Pants'
import Shoes from './Shoes'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Accessories />
        <Shirts />
        <Pants />
        <Shoes />
      </div>
    );
  }
}

export default App;
