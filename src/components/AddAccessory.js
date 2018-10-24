import React, {Component} from 'react'
import axios from 'axios'
import {ACCESSORIES_URL} from '../constants.js'

class AddAccessory extends Component {
  categoryRef = React.createRef()
	colorRef = React.createRef()
	imagesRef = React.createRef()
	nameRef = React.createRef()
	tagsRef = React.createRef()
	//render Accessories above AddAccessory return and add a route
	componentDidMount() {
		console.log(`${ACCESSORIES_URL}/${this.nameRef.current.value}`)
	}

  createAccessory = e => {
		e.preventDefault()
		const accessory = {
			category: this.categoryRef.current.value,
			color: this.colorRef.current.value,
			images: this.imagesRef.current.value,
			name: this.nameRef.current.value,
			tags: this.tagsRef.current.value
		}
		this.props.addAccessory(accessory)
		this.handleSubmit()
		e.currentTarget.reset()
	}
	// var id = document.getElementById("product_qty").value;
	// var lastChar = id.substr(id.length - 1);
	handleSubmit = () => {
		axios
		.post(`${ACCESSORIES_URL}/`, {accessory: this.props.accessory})
		.then(res => console.log(res))
		.catch(err => console.log(err))
		console.log(`${ACCESSORIES_URL}/${this.nameRef.current.value}`)
	}

	test = () => {
		console.log(`${ACCESSORIES_URL}/${this.nameRef.current.value.substr(this.nameRef.current.value - 1)}`)
	}

  render() {
    return(
      <form className="add-accessory" onSubmit={this.createAccessory}>
				<input name="category" ref={this.categoryRef} type="text" placeholder="Category" />
				<input name="color" ref={this.colorRef} type="text" placeholder="Color" />
				<input name="images" ref={this.imagesRef} placeholder="Images" />
				<input name="name" ref={this.nameRef} type="text" placeholder="Name" />
        <input name="tags" ref={this.tagsRef} type="text" placeholder="Tags" />
				<button type="submit" onSubmit={this.test}>+ Add Accessory</button>
			</form>
			// <div></div>
    )
  }
}

export default AddAccessory
