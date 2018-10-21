import React, {Component} from 'react'

class Shoes extends Component {
  render() {
    console.log(this.props)
    return (
      <div>
        <li className="shoes-list">
				  <img src={this.props.shoes.images} alt={this.props.shoes.name} />
        </li>
      </div>
    )
  }
}

export default Shoes
