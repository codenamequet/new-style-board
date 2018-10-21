import React, {Component} from 'react'

class Pants extends Component {
  render() {
    return (
      <div>
        <li className="pants-list">
				  <img src={this.props.pants.images} alt={this.props.pants.name} />
        </li>
      </div>
    )
  }
}

export default Pants
