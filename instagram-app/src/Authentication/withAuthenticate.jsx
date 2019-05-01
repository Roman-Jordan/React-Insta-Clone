import React from 'react';
import Login from './Login';

const withAuthenticate = Component =>
  class extends React.Component {
      state = {
            username: localStorage.getItem('username')
        }
        
        component = this.state.username ? <Component />:<Login />
      
        render() {
        return (this.component)
        }
  };

export default withAuthenticate;