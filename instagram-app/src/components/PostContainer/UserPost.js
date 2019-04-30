import React from 'react';
import Comments from '../CommentSection/Comments';

import './post.scss';

export default function UserPost(props){
    

    return(
        <section className="UserPost">
            <header>
                <img src={props.post.thumbnailUrl} alt="userThumb"/>
                <p>{props.post.username}</p>
            </header>
            <img src={props.post.imageUrl} alt="UserPost"/>
            <div className="postContent">
                <div className="iconTray">
                    <i className="far fa-heart fa-3x"></i>
                    <i className="far fa-comment fa-3x"></i>
                </div>
                <p className="likes">{`${props.post.likes} Likes`}</p>
                <Comments comments={props.post.comments}/>
            </div>
        </section>
    )

}


