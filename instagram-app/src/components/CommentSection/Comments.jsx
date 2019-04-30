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

    addComment = e => {
        e.preventDefault();
        this.setState({
            comments: [...this.state.comments,{
                text:'2',
                username:'2'    
            }]})
        console.log(this.state.comments)
    }

    render(){
        return(
            <>
            <div className="Comments">
                {this.state.comments.map((comment, i) => <Comment key={i} userComment={comment} />)}
            </div>
            <AddComment userComment={this.state.comments} addComment={this.addComment} />
            </>
        )
    }
}
