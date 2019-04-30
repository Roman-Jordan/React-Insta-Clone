import React from 'react';
export default function AddComment(props){

    return(
        <div className="AddComment">
            <form>
                <input 
                type="text" 
                name="addComment"
                className="addComment"
                placeholder="Add a comment..." 
                value = {props.text}
                />
                <button onClick={props.addComment} type="submit">...</button>
            </form>
        </div>
    )
}