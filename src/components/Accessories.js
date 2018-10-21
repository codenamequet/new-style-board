import React, {Component} from 'react'

class Accessories extends Component {
  render() {
    const accessory = this.props.accessories
    // for (let i = 0; i < accessory.length; i++) {
    //   return 
    // }
    // const accessoryMap = [accessory].map(img => console.log(img.length && img[img]))
  
    return (
      <div>
        <p>These are the accessories</p>
        <img 
        src={this.props.accessories.length && this.props.accessories[0].images} 
        alt={this.props.accessories.length && this.props.accessories[0].name} 
        />
        <img 
        src={this.props.accessories.length && this.props.accessories[1].images} 
        alt={this.props.accessories.length && this.props.accessories[1].name} 
        />
        <img 
        src={this.props.accessories.length && this.props.accessories[2].images} 
        alt={this.props.accessories.length && this.props.accessories[2].name} 
        />
      </div>
    )
  }
}

export default Accessories
