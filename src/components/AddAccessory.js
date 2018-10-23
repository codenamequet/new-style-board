import React, {Component} from 'react'

class AddAccessory extends Component {
  categoryRef = React.createRef()
	colorRef = React.createRef()
	imagesRef = React.createRef()
	nameRef = React.createRef()
	tagsRef = React.createRef()
	//render Accessories above AddAccessory return and add a route
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
		e.currentTarget.reset()
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
			// <div></div>
    )
  }
}

export default AddAccessory
