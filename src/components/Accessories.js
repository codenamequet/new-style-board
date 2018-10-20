import React, {Component} from 'react'

class Accessories extends Component {
  render() {
    const accImages = this.props.accessories[0]
    // console.log(`props: ${accImages}`)
    console.log(this.props.accessories[0])
    // const accessory = accImages.map(img => console.log(img))
    return (
      <div>
      <p>These are the accessories</p>
      {/* <img src={accessory} alt={this.props.state.accessories.name} /> // whatever dot notation returns the images */}
      </div>
    )
  }
}

export default Accessories
