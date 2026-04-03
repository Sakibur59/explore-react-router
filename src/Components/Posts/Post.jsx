import React from 'react';
import { Link } from 'react-router';

const Post = ({post}) => {
    const {id,title,body}=post
    return (
        <div style={{border:"2px solid green"}}>
            <h2>{title}</h2>
            {/* <p>{body}</p> */}
            <Link to={`/posts/${id}`}>
            <button>Show Details</button>
            </Link>
        </div>
    );
};

export default Post;