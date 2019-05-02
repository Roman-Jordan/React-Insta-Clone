import React from 'react';
import './App.scss';
import withAuthenticate from './Authentication/withAuthenticate';
import PostPage from './components/PostContainer/PostPage';

export default function App(){
    const Post = withAuthenticate(PostPage);
    return (<Post/>)
}






