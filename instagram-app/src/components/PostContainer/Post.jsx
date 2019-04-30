import React from 'react';
import PropTypes from 'prop-types';
import UserPost from './UserPost';

export default function PostContainer(props){
    console.log(props.userPosts)
    return(
        <>
            <div className="PostContainer">
                {props.userPosts.map((userPost, i) => 
                    <UserPost key={i} post={userPost} />
                )}
            </div>
        </>
    )

    
}