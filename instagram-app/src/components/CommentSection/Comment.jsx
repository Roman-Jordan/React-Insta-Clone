import React from 'react';
import './comments.scss';

export default function Comment(props){

    return(
        <>
        <div className="Comment">
           <p><strong> {props.userComment.username}</strong> {props.userComment.text}</p>
        </div>
        
        </>
    )


}