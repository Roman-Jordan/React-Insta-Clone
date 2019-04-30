import React from 'react';
import './post.scss'
export default function UserPost(props){

    return(
        <section className="UserPost">
            <header>
                <img src={props.post.thumbnailUrl} />
                <p>{props.post.username}</p>
            </header>
            <img src={props.post.imageUrl} />
        </section>
    )

}