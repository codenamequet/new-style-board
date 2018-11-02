import React, {Component, Fragment} from 'react'
import EditAccessory from './EditAccessory'

// Look at :name params and show that accessory -> write route in backend
// Should show edit EditAccessory component

const IndividualAccessory = props => (
  <Fragment>
    <div>Individual Accessory</div>
    {/* <h1>{props.match.params.name}</h1> */}
    {/* <img src={props.match.accessory[2].images} alt={props.accessory[2].name} /> */}
    <EditAccessory />
  </Fragment>
)

// class IndividualAccessory extends Component {
//   render() {
//     return (
//       <Fragment>
//     <div>Individual Accessory</div>
//     {/* <h1>{props.match.params.name}</h1> */}
//     {/* <img src={props.match.accessory[2].images} alt={props.accessory[2].name} /> */}
//     <EditAccessory />
//   </Fragment>
//     )
//   }
// }

export default IndividualAccessory
