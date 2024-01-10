import React, {useState} from 'react';
import {Form, Button} from 'react-bootstrap';
import {useDispatch} from 'react-redux';
import {addPost} from '../../../redux/postRedux';
import {v4 as uuidv4} from 'uuid';

const AddPostForm = ({onPostAdded}) => {
    const [post, setPost] = useState({title: '', author: '', content: '', publishedDate: ''});
    const dispatch = useDispatch();

    const handleChange = (e) => {
        const {name, value} = e.target;
        setPost({...post, [name]: value});
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const newPost = {...post, id: uuidv4()};
        dispatch(addPost(newPost));
        onPostAdded();
    };

    return (
        <Form onSubmit={handleSubmit}>
            <div className='w-50'>
                <Form.Group controlId="title">
                    <Form.Label>Title</Form.Label>
                    <Form.Control type="text" name="title" value={post.title} onChange={handleChange} required/>
                </Form.Group>
                <Form.Group className='mt-3' controlId="author">
                    <Form.Label>Author</Form.Label>
                    <Form.Control type="text" name="author" value={post.author} onChange={handleChange} required/>
                </Form.Group>
                <Form.Group controlId="publishedDate">
                    <Form.Label className='mt-3'>Published Date</Form.Label>
                    <Form.Control type="date" name="publishedDate" value={post.publishedDate} onChange={handleChange}
                                  required/>
                </Form.Group>
            </div>
            <Form.Group className='mt-3' controlId="shortDescription">
                <Form.Label>Short description</Form.Label>
                <Form.Control as="textarea" name="shortDescription" value={post.shortDescription}
                              onChange={handleChange} required/>
            </Form.Group>
            <Form.Group className='mt-3' controlId="content">
                <Form.Label>Main content</Form.Label>
                <Form.Control as="textarea" name="content" value={post.content} onChange={handleChange} required
                              rows={4}/>
            </Form.Group>

            <Button className='mt-3' variant="primary" type="submit">
                Add Post
            </Button>
        </Form>
    );
};

export default AddPostForm;
