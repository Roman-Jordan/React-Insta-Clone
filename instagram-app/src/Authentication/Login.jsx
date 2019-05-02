import React from 'react';
import styled from 'styled-components';
import {css} from 'styled-components';

const Title = styled.h1`
    font-size:3rem;
`;

const Div= styled.div`
    font-size:62.5%;
    max-width:40rem;
    margin:auto;
    height:100vh;
    width:100%;
    form{
        padding:2rem;
        background:#ddd;
        display:flex;
        flex-direction:column;
        position:relative;
        border-radius:1rem;
        top:35%;
        input{
            margin:1rem 0;
            padding:.5rem;
            font-size:2rem
        }
        button{
            font-size:2.5rem;
            padding:1rem;
        }
    }
`;


export default class Login extends React.Component{
    render(){
        return(
        <>  <Div className='LogInContainer'>
                
                <form onSubmit={this.props.loginAttempt}>
                <Title>Please Login...</Title>
                    <input 
                        type="text" 
                        onChange={this.props.updateLogin} 
                        placeholder="UserName" 
                        value={this.props.username}
                    />
                    <input 
                        type="password" 
                        placeholder="Password" />
                    <button type="submit">Continue</button>
                    
                </form>
            </Div>
        </>
    )}
}