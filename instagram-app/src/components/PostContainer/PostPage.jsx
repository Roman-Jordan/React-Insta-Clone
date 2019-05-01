import React from 'react';
import PostContainer from './Post';
import dataSet from'../../dummy-data.js';

export default class PostPage extends React.Component{

    state = {
        userPosts : [],
        userComments: []
      }
    
  
    newPost = userPost =>{
  
    }
  
    componentDidUpdate(){
      
    }
  
    componentDidMount(){
      this.setState({
        userPosts : dataSet
      })
    }
    render(){
        return(
            
            <PostContainer userPosts={this.state.userPosts} newPost={this.newPost}/>
        )
    }
}