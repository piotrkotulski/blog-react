import React from 'react';
import { useSelector } from 'react-redux';
import { getAllPosts } from '../../../redux/postRedux';
import PostPreview from '../../views/PostPreview/PostPreview';

const Posts = () => {
    const posts = useSelector(getAllPosts);

    return (
        <div className="d-lg-flex flex-column flex-lg-row justify-content-center">
            {posts.map(post => (
                <PostPreview key={post.id} post={post} />
            ))}
        </div>
    );
};

export default Posts;