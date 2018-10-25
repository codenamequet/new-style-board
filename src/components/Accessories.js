import React, {Component, Fragment} from 'react'
import {Link} from 'react-router-dom'
import AddAccessory from './AddAccessory'

const accessoriesStyle = {
  width: '5vw',
  height: '5vh',
}

class Accessories extends Component {
  // componentDidMount() {
  //   console.log('props before: ', this.props.accessory)
  // }

  // componentDidUpdate() {
  //   console.log('props after: ', this.props.accessory[]) 
  // }

  render() {
    return (
      <Fragment>
        <li className="accessory-list">
        {/* <Link to={{
          pathname: `/accessories/${this.props.accessory.name}`
        }}> */}
        <img src={this.props.accessory.images} alt={this.props.accessory.name} style={accessoriesStyle} />
        {/* </Link> */}
        </li>
        <div>
        {/* <AddAccessory addAccessory={this.props.addAccessory} /> */}
        </div>
      </Fragment>
    )
  }
}

export default Accessories
