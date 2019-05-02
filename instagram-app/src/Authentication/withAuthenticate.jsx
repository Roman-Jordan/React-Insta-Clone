import React from 'react';
import Login from './Login';

const withAuthenticate = Component =>
  class extends React.Component {
      state={
          username : '',
          loggedIn: false
      }

    loginAttempt = e =>{
        e.preventDefault();
        localStorage.setItem('username',this.state.username);
        this.setState({
          loggedIn:!this.state.loggedIn
        })
    }
    
    updateLoginInput = e =>{
        e.preventDefault();
        this.setState({
            username: e.target.value
        })
    }

    logOut = () => {
        this.setState({loggedIn:!this.state.loggedIn})
        console.log('loggedOut')
    }

    component = () =>{
        if(localStorage.username && this.state.loggedIn){
          return  <Component user={this.state.username} logOut={this.logOut} />
        }else{
        return <Login 
            loginAttempt={this.loginAttempt} 
            user={this.props.user} 
            updateLogin={this.updateLoginInput}
        />
        }
    }
    
    render() {
        return (this.component())
    }
}

export default withAuthenticate;