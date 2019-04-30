import React from 'react';
export default function AddComment(){

    return(
        <div className="AddComment">
            <input 
            type="text" 
            name="addComment"
            className="addComment"
            placeholder="Add a comment..."  
            />
        </div>
    )
}