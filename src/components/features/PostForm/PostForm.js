import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import ReactDatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';


const PostForm = ({ action, actionText, ...props }) => {
    const [title, setTitle] = useState(props.title || '');
    const [author, setAuthor] = useState(props.author || '');
    const [publishedDate, setPublishedDate] = useState(props.publishedDate || '');
    const [shortDescription, setShortDescription] = useState(props.shortDescription || '');
    const [content, setContent] = useState(props.content || '');

    const handleSubmit = e => {
        e.preventDefault();
        action({ title, author, publishedDate, shortDescription, content });
    };

    return (
        <Form onSubmit={handleSubmit}>
            <Form.Group controlId="title">
                <Form.Label>Title</Form.Label>
                <Form.Control type="text" name="title" value={title} onChange={(e) => setTitle(e.target.value)} required />
            </Form.Group>
            <Form.Group className='mt-3' controlId="author">
                <Form.Label>Author</Form.Label>
                <Form.Control type="text" name="author" value={author} onChange={(e) => setAuthor(e.target.value)} required />
            </Form.Group>
            <Form.Group controlId="publishedDate">
                <Form.Label className='mt-3'>Published Date</Form.Label>
                <ReactDatePicker
                    selected={new Date(publishedDate)}
                    onChange={(date) => setPublishedDate(date)}
                    dateFormat="MM/dd/yyyy"
                    className="form-control"
                    required
                />
            </Form.Group>
            <Form.Group className='mt-3' controlId="shortDescription">
                <Form.Label>Short description</Form.Label>
                <ReactQuill  name="shortDescription" value={shortDescription} onChange={setShortDescription} required />
            </Form.Group>
            <Form.Group className='mt-3' controlId="content">
                <Form.Label>Main content</Form.Label>
                <ReactQuill name="content" value={content} onChange={setContent}  />
            </Form.Group>

            <Button className='mt-3' variant="primary" type="submit">
                {actionText}
            </Button>
        </Form>
    );
};

export default PostForm;
