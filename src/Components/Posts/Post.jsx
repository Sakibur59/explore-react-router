import React from 'react';
import { Link, useNavigate } from 'react-router';

const Post = ({post}) => {
    const {id,title,body}=post;
    const navigate = useNavigate()
    const handleNavigate = ()=> {
        navigate(`/posts/${id}`)
    }
    return (
        <div style={{border:"2px solid green"}}>
            <h2>{title}</h2>
            {/* <p>{body}</p> */}
            <Link to={`/posts/${id}`}>
            <button>Show Details</button>
            </Link>
            <button onClick={handleNavigate}>Move to Home tab</button>
        </div>
    );
};

export default Post;