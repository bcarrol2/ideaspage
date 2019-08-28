import React from 'react';
import axios from 'axios';
import Idea from './Idea';

export default class IdeasContainer extends React.Component {
    constructor(props){
        super(props)

        this.state = {
            ideas: []
        }
    }

    componentDidMount(){
        axios.get('http://localhost:3001/api/v1/ideas.json')
        .then(response => {
            console.log(response)
            this.setState({ideas: response.data})
        })
        .catch(error => console.log(error))
    }

    render(){
        return(
            <div>
                {this.state.ideas.map((idea) => {
                        return (
                            <Idea idea={idea} key={idea.id}/>
                        )
                    }
                )}
            </div>
        )
    }
}