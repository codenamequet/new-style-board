import React, {Component} from 'react'

class Accessories extends Component {
  render() {
    return (
      <div>
        <li className="accessory-list">
				  <img src={this.props.accessory.images} alt={this.props.accessory.name} />
        </li>
      </div>
    )
  }
}

export default Accessories
