import React from 'react';
import Comment from './Comment';
import AddComment from './AddComment';

export default class Comments extends React.Component{
    constructor(props){
        super();
        this.state ={
            comments: [],
            username:localStorage.getItem('username') ,
            newComment:''
        }
    }

    componentDidMount(){
        this.setState({
            comments : this.props.comments
      })
    }

    CommentSubmitted = e => {
        e.preventDefault();
        this.setState({
            comments: [...this.state.comments,{text:this.state.newComment,username:this.state.username}],
            newComment:''
        })
        console.log(e.target)
    }

    CommentUpdate = e =>{
        this.setState({
            newComment:e.target.value
        })
    }

    render(){
        return(
            <>
            <div className="Comments">
                {this.state.comments.map((comment, i) => <Comment key={i} userComment={comment} />)}
            </div>
            <AddComment 
                userComment={this.state.comments} 
                CommentUpdate={this.CommentUpdate} 
                CommentSubmitted={this.CommentSubmitted} 
                text={this.state.newComment}
            />
            </>
        )
    }
}
