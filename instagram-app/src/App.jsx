import React from 'react';
import './App.scss';
import Search from './components/SearchBar/Search';
import logo from './1200px-Instagram_logo.svg.png';
import withAuthenticate from './Authentication/withAuthenticate';
import PostPage from './components/PostContainer/PostPage';



export default function App (){
  
    const Post = withAuthenticate(PostPage);
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
        <Post />
      </div>
    )
}





