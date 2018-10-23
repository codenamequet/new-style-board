import React, { Component } from 'react'
import axios from 'axios'
import Nav from './Nav'
import Accessories from './Accessories'
import AddAccessory from './AddAccessory'
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

  addAccessory = accessory => {
    const accessories = {...this.state.accessories}
    // Add our new accessory to the accessories variable
    accessories[`accessory${Date.now()}`] = accessory
    this.setState({accessories})
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
            addAccessory={this.addAccessory}
          />
        ))}
        <AddAccessory addAccessory={this.addAccessory} />
        {Object.keys(this.state.shirts).map(key => 
          (<Shirts 
            key={key} 
            index={key} 
            shirt={this.state.shirts[key]}  
          />
        ))}
        {Object.keys(this.state.pants).map(key => 
          (<Pants 
            key={key} 
            index={key} 
            pants={this.state.pants[key]}
          />
        ))}
        {Object.keys(this.state.shoes).map(key => 
          (<Shoes 
            key={key} 
            index={key} 
            shoes={this.state.shoes[key]}
          />
        ))}
          
        {/* <Shirts shirts={this.state.shirts} />
        <Pants pants={this.state.pants} />
        <Shoes shoes={this.state.shoes} /> */}
      </div>
    )
  }
}

export default App;
