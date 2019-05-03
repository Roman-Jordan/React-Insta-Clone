import React from 'react';
import Comments from '../CommentSection/Comments';
import styled from 'styled-components';

const UserPosts = styled.section`

    max-width:60rem;
    margin:5rem auto;
    border:1px solid #ddd;
    border-radius:.5rem;
    
    header{
        display: flex;
        align-items:center;
        padding:2rem;
        
        img{
            width:3rem;
            border-radius: 50%;
        }
        p{
            font-size: 1.8rem;
            padding:1rem;
            font-weight:bolder;
        }
    }
    .postContent{
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        align-content: center;
        .iconTray{
            i{
                margin:1rem;
            }
            .fa-comment{
                transform: rotateY(180deg)
            }
        }
        .likes{
            font-size:1.8rem;
            margin:0 1rem;
        }
    }
`;

export default function UserPost(props){
    localStorage.setItem(`post-${props.postIndex}`, props.post)

    return(
        <UserPosts className="UserPost" data-key={props.postIndex}>
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
        </UserPosts>
    )
}


