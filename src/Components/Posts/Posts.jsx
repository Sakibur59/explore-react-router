import React from 'react';
import { useLoaderData } from 'react-router';

const Posts = () => {
    const post = useLoaderData();
    return (
        <div>
            <h2>There are my posts {post.length}</h2>
        </div>
    );
};

export default Posts;