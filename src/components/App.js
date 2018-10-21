import React, { Component } from 'react'
import axios from 'axios'
import Nav from './Nav'
import Accessories from './Accessories'
import Shirts from './Shirts'
import Pants from './Pants'
import Shoes from './Shoes'
import {ACCESSORIES_URL} from '../constants.js'
import {SHIRTS_URL} from '../constants.js'
import {PANTS_URL} from '../constants.js'
import {SHOES_URL} from '../constants.js'

class App extends Component {
  state = {
    accessories: {},
    shirts: {},
    pants: {},
    shoes: {}
  }

  componentDidMount() {
    axios.all([
      axios.get(`${ACCESSORIES_URL}`),
      axios.get(`${SHIRTS_URL}`),
      axios.get(`${PANTS_URL}`),
      axios.get(`${SHOES_URL}`)
    ])
    .then(axios.spread((accRes, shirtsRes, pantsRes, shoesRes) => {
      this.setState({accessories: accRes.data.accessories})
      this.setState({shirts: shirtsRes.data.shirts})
      this.setState({pants: pantsRes.data.pants})
      this.setState({shoes: shoesRes.data.shoes})
    }))
  }

  render() {
    return (
      <div className="App">
        <Nav />
        {Object.keys(this.state.accessories).map(key => 
          (<Accessories 
            key={key} 
            index={key} 
            accessory={this.state.accessories[key]} 
          />
        ))}
        <Shirts shirts={this.state.shirts} />
        <Pants pants={this.state.pants} />
        <Shoes shoes={this.state.shoes} />
      </div>
    )
  }
}

export default App;
