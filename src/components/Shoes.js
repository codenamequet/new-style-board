import React, {Component} from 'react'
import AddShoes from './AddShoes'

const shoesStyle = {
  width: '15vw',
  height: '25vh',
}

class Shoes extends Component {
  render() {
    return (
      <div>
        <li className="shoes-list">
				  <img src={this.props.shoes.images} alt={this.props.shoes.name} style={shoesStyle} />
        </li>
      </div>
    )
  }
}

export default Shoes
