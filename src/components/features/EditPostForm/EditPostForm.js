import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { editPost } from '../../../redux/postRedux';
import { useParams } from 'react-router-dom';
import PostForm from '../PostForm/PostForm';

const EditPostForm = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const posts = useSelector((state) => state.posts);
    const post = posts.find((p) => p.id === id);


    const handleSubmit = post => {
        dispatch(editPost({ ...post, id }));
        navigate('/');
    };

    if (!post) {
        navigate('/');
        return null;
    }
/*    const convertDate = (dateStr) => {
        if (dateStr.match(/^\d{4}-\d{2}-\d{2}$/)) {
            return dateStr;
        }
        const [day, month, year] = dateStr.split('-');
        return `${year}-${month}-${day}`;
    };*/

    return (
        <div className='w-50'>
            <h1>Edit Post</h1>
            <PostForm
                action={handleSubmit}
                actionText="Edit Post"
                title={post.title}
                author={post.author}
                publishedDate={new Date(post.publishedDate)}
                shortDescription={post.shortDescription}
                content={post.content}
                category={post.category}
            />
        </div>
    );
};

export default EditPostForm;