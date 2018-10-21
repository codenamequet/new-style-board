import React, {Component} from 'react'

class Shirts extends Component {
  render() {
    console.log(this.props)
    return (
      <div>
        <li className="shirts-list">
				  {/* <img src={this.props.shirt.images} alt={this.props.shirt.name} /> */}
        </li>
      </div>
    )
  }
}

export default Shirts
