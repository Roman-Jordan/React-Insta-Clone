import React from 'react';
import './App.scss';
import dataSet from'./dummy-data.js';
import Search from './components/SearchBar/Search';
import logo from './1200px-Instagram_logo.svg.png';
import PostContainer from './components/PostContainer/Post'


export default class App extends React.Component{
  constructor(){
    super();
    this.state = {
      userPosts : [],
      userComments: []
    }
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
    return (
      <div className="App">
        <header className="header">
          <div className="logo">
            <i className="fab fa-instagram fa-5x"></i>
            <img src={logo} alt="Instagram in Cursive type writing" />
          </div>
          <Search />
          <div className="iconTray">
            <i className="far fa-compass fa-3x"></i>
            <i className="far fa-heart fa-3x"></i>
            <i className="far fa-user fa-3x"></i>
          </div>
        </header>
        <PostContainer userPosts={this.state.userPosts} newPost={this.newPost}/>
      </div>
    )
  }
}


