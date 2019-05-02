import React from 'react';
import PostContainer from './Post';
import dataSet from'../../dummy-data.js';
import Search from './../SearchBar/Search';
import logo from '../../1200px-Instagram_logo.svg.png';
import styled from 'styled-components';

const Header = styled.header`
  display:flex;
  justify-content: space-between;
  border-bottom:1px solid #ddd;
  margin:2rem 0;
  align-items:center;


  .logo{
    max-width:20rem;
    display:flex;
    align-items: center;
    margin: 1.3rem 2rem 1rem 2rem;

    img{
      border-left:1px solid black;
      padding:0 2rem;
      margin:0 2.8rem;
    }
  }

  .iconTray{
    display:flex;
    width:21.5rem;
    justify-content: space-between;
    margin:0 3rem 1rem 0;
    i{
      margin:0 2rem 0 2rem;
      font-weight: lighter;
    }
  }
}
`;

export default class PostPage extends React.Component{

    state = {
        userPosts : [],
        userComments: []
      }
  
    componentDidMount(){
      this.setState({
        userPosts : dataSet
      })
    }

    searching = e =>{
      
    }
    render(){
        return(
          <>
            <Header className="header">
            <div className="logo">
                <i className="fab fa-instagram fa-5x"></i>
                <img src={logo} alt="Instagram in Cursive type writing" />
            </div>
            <Search />
            <div className="iconTray">
                <i className="far fa-compass fa-3x"></i>
                <i className="far fa-heart fa-3x"></i>
                <i onClick={this.props.logOut} className="far fa-user fa-3x"></i>
            </div>
            </Header>
            <PostContainer userPosts={this.state.userPosts} newPost={this.newPost} />
          </>
        )
    }
}