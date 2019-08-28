import React from 'react';

export default class Idea extends React.Component {
handleClick = () => { this.props.onClick(this.props.idea.id) }

	handleDelete = () => { this.props.onDelete(this.props.idea.id) }

	render () {
		return(
		  <div className="stickynote">
		  	<span className="deleteIdea" onClick={this.handleDelete}>x</span>
		    <h4 onClick={this.handleClick}>{this.props.idea.title}</h4>
		    <p onClick={this.handleClick}>{this.props.idea.body}</p>
		  </div>
		)
	}
}