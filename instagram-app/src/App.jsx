import React from 'react';
import './App.scss';
import dataSet from'./dummy-data.js';
import Search from './components/SearchBar/Search';
import logo from './1200px-Instagram_logo.svg.png';
import PropTypes from 'prop-types';


export default class App extends React.Component{
  constructor(){
    super();
    this.state = {
      userPosts : []
    }
    console.log(dataSet);
  }
  render(){
    return (
      <div className="App">
        <div className="header">
          <div className="logo">
            <i className="fab fa-instagram fa-4x"></i>
            <img src={logo} />
          </div>
          <Search />
          <div className="iconTray">
          </div>
        </div>
      </div>
    )
  }
}


