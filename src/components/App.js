import React, { Component } from 'react'
import axios from 'axios'
import Nav from './Nav'
import Accessories from './Accessories'
import Shirts from './Shirts'
import Pants from './Pants'
import Shoes from './Shoes'
import {ACCESSORIES_URL} from '../constants.js'

class App extends Component {
  state = {
    accessories: {},
    shirts: {},
    pants: {},
    shoes: {}
  }

  componentDidMount() {
    axios
    .get(`${ACCESSORIES_URL}`)
    .then(res => this.setState({accessories: res.data.accessories}))
    .catch (err => console.log(err))
  }

  render() {
    return (
      <div className="App">
        <Nav />
        <Accessories accessories={this.state.accessories} />
        <Shirts shirts={this.state.shirts} />
        <Pants pants={this.state.pants} />
        <Shoes shoes={this.state.shoes} />
      </div>
    );
  }
}

export default App;
