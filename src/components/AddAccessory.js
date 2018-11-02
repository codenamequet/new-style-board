import React, {Component} from 'react'
import axios from 'axios'
import {ACCESSORIES_URL} from '../constants.js'

class AddAccessory extends Component {
	accessoriesArr = []

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
		this.accessoriesArr.push(accessory)
		e.currentTarget.reset()
	}

	componentWillReceiveProps = nextProps => {
		axios
		.post(`${ACCESSORIES_URL}`, {accessory: this.accessoriesArr})
		.then(res => {
			console.log('from componentWillReceiveProps post call, res is', res);
			console.log('from componentWillReceiveProps post call, res.data is', res.data)
		})
		.catch(err => console.log(err))
		this.accessoriesArr = []
		// return true
	}

  render() {
    return(
      <form className="add-accessory" onSubmit={this.createAccessory}>
				<input name="category" ref={this.categoryRef} type="text" placeholder="Category" />
				<input name="color" ref={this.colorRef} type="text" placeholder="Color" />
				<input name="images" ref={this.imagesRef} placeholder="Images" />
				<input name="name" ref={this.nameRef} type="text" placeholder="Name" />
        <input name="tags" ref={this.tagsRef} type="text" placeholder="Tags" />
				<button type="submit">+ Add Accessory</button>
			</form>
    )
  }
}

export default AddAccessory
