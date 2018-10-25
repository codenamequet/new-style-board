import React, {Component} from 'react'
import axios from 'axios'
import {ACCESSORIES_URL} from '../constants.js'
import { create } from 'domain'

class AddAccessory extends Component {
  categoryRef = React.createRef()
	colorRef = React.createRef()
	imagesRef = React.createRef()
	nameRef = React.createRef()
	tagsRef = React.createRef()

  createAccessory = (e) => {
		e.preventDefault()
		const accessory = {
			category: this.categoryRef.current.value,
			color: this.colorRef.current.value,
			images: this.imagesRef.current.value,
			name: this.nameRef.current.value,
			tags: this.tagsRef.current.value
		}
		this.props.addAccessory(accessory)
		// console.log(this.props.accessory)
		// this.handleSubmit()
		// this.componentWillReceiveProps(accessory)
		e.currentTarget.reset()
	}

	componentWillReceiveProps = nextProps => {
		console.log(nextProps.accessory)
		console.log(Object.keys(nextProps.accessory))
		axios
		.post(`${ACCESSORIES_URL}`, {accessory: nextProps})
		.then(res => console.log(res))
		.catch(err => console.log(err))
		return true
	}

	// handleSubmit = () => {
	// 	console.log('props before: ', this.props.accessory)
	// 	axios
	// 	.post(`${ACCESSORIES_URL}/`, {accessory: this.props.accessory})
	// 	.then(res => console.log(res.data))
	// 	.catch(err => console.log(err))
	// 	// console.log(`${ACCESSORIES_URL}/${this.nameRef.current.value}`)
	// 	console.log('props after: ', this.props.accessory)
	// }

	
	
	// componentWillReceiveProps(newProps) {
	// 	axios
	// 	.post(`${ACCESSORIES_URL}/`, {accessory: newProps})
	// 	.then(res => console.log(res.data))
	// 	.catch(err => console.log(err))
	// 	// console.log(`${ACCESSORIES_URL}/${this.nameRef.current.value}`)
	// 	console.log('props after: ', newProps)
	// }

  render() {
    return(
      <form className="add-accessory" onSubmit={this.createAccessory}>
				<input name="category" ref={this.categoryRef} type="text" placeholder="Category" />
				<input name="color" ref={this.colorRef} type="text" placeholder="Color" />
				<input name="images" ref={this.imagesRef} placeholder="Images" />
				<input name="name" ref={this.nameRef} type="text" placeholder="Name" />
        <input name="tags" ref={this.tagsRef} type="text" placeholder="Tags" />
				<button type="submit" onSubmit={this.test} onClick={this.handleSubmit}>+ Add Accessory</button>
			</form>
			// <div></div>
    )
  }
}

export default AddAccessory
