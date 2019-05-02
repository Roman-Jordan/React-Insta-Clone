import React from 'react';
export default function AddComment(props){

    return(
        <div className="AddComment">
            <form onSubmit={props.CommentSubmitted}>
                <input 
                    type="text" 
                    name="addComment"
                    className="addComment"
                    placeholder="Add a comment..." 
                    value = {props.text}
                    onChange = {props.CommentUpdate}
                />
                <button type="submit">...</button>
            </form>
        </div>
    )
}