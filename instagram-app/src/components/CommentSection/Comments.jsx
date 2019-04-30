import React from 'react';
import Comment from './Comment';
import AddComment from './AddComment';

export default class Comments extends React.Component{
    constructor(props){
        super();
        this.state ={
            comments: []
        }
    }

    componentDidMount(){
        this.setState({
            comments : this.props.comments
        })
    }
    render(){
        return(
            <>
            <div className="Comments">
                {this.state.comments.map((comment, i) => <Comment key={i} userComment={comment} />)}
            </div>
            <AddComment userComment={this.state.comments} />
            </>
        )
    }
}
