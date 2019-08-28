import React from 'react';
import axios from 'axios';

export default class IdeaForm extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            title: this.props.idea.title,
            body: this.props.idea.body
        }
    }

    handleChange = (e) => {this.setState({[e.target.name]: e.target.value})}

    handleblur = () => {
        const idea = {title: this.state.title, body: this.state.body}
        axios.put(`http://localhost:3001/api/v1/ideas/${this.props.idea.id}`, {idea: idea})
        .then(response => {
            console.log(response)
            this.props.updateIdea(response.data)
        })
        .catch(error => console.log(error))
    }

    render(){
        return(
            <div className="tile">
                <form onBlur={this.handleblur}>
                    <input className="input" type="text" name="title" placeholder="Title" value={this.state.title} onChange={this.handleChange}/>
                    <textarea className="input" name="body" placeholder="What's your idea?" value={this.state.body} onChange={this.handleChange}></textarea>
                </form>
            </div>
        )
    }
}