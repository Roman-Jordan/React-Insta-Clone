import React from 'react';
import UserPost from './UserPost';
import PropTypes from 'prop-types';

export default function PostContainer(props){
    return(
        <>
            <div className="PostContainer">
                {props.userPosts.map((userPost, i) => 
                    <UserPost postIndex={i} key={i} post={userPost} />
                )}
            </div>
        </>
    )
}

PostContainer.propTypes = {
    post: PropTypes.arrayOf(
        PropTypes.shape({
            username: PropTypes.string.isRequired,
            imageUrl: PropTypes.string.isRequired,
            thumbnailUrl: PropTypes.string.isRequired
        })
    )
}