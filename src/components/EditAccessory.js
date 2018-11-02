import React, {Component} from 'react'
import axios from 'axios'
import {ACCESSORIES_URL} from '../constants.js'


class EditAccessory extends Component {
	// 1. Display form with data from item as a placeholder
	// 2. Update the state with any new value(s)

  // handleChange = e => {
	// 	e.currentTarget.value
	// 	const updatedAccessory = {...this.props.accessories, [e.currentTarget.name]: e.currentTarget.value}
	// 	this.props.updateAccessory(this.props.index, updatedAccessory)
	// }

  render() {
    return(
    //   <form className="add-accessory" onSubmit={this.handleChange}>
		// 		<input type="text" name="category" onChange={this.handleChange} value={this.props.category} />
		// 		<input type="text" name="color" onChange={this.handleChange} value={this.props.color} />
		// 		<input type="text" name="images" onChange={this.handleChange} value={this.props.images} />
		// 		<input type="text" name="name" onChange={this.handleChange} value={this.props.name} />
    //     <input type="text" name="tags" onChange={this.handleChange} value={this.props.tags} />
		// 		<button onClick={() => this.props.deleteAccessory(this.props.index)}>Remove Accessory</button>
		// 	</form>
			<div></div>
    )
  }
}

export default EditAccessory
