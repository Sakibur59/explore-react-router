import React from 'react';
import { useLoaderData } from 'react-router';

const PostDetails = () => {
    const postDetails = useLoaderData()
    return (
        <div>
            <h2>{postDetails.title}</h2>
            <p>{postDetails.body}</p>
        </div>
    );
};

export default PostDetails;