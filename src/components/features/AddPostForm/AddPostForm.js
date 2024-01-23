import React from 'react';
import { Button } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addPost } from '../../../redux/postRedux';
import { v4 as uuidv4 } from 'uuid';
import PostForm from '../PostForm/PostForm';

const AddPostForm = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleSubmit = (post) => {
        const newPost = {
            ...post,
            id: uuidv4(),
            publishedDate: post.publishedDate || new Date()
        };
        dispatch(addPost(newPost));
        navigate('/');
    };

    return (
        <div className='w-50'>
            <h1>Add Post</h1>
            <PostForm action={handleSubmit} actionText="Add Post" />
        </div>
    );
};

export default AddPostForm;