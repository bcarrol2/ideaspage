import React from 'react';

export default class Idea extends React.Component {
    handleClick = () => {this.props.onClick(this.props.idea.id)}

    render(){
        return(
            <div className="tile">
                <h3 onClick={this.handleClick}>{this.props.idea.title}</h3>
                <p onClick={this.handleClick}>{this.props.idea.body}</p>
            </div>
        )
    }
}