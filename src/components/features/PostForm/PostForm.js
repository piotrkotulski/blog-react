import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import ReactDatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { useForm } from "react-hook-form";


const PostForm = ({ action, actionText, ...props }) => {
    const [title, setTitle] = useState(props.title || '');
    const [author, setAuthor] = useState(props.author || '');
    const [publishedDate, setPublishedDate] = useState(
        props.publishedDate ? new Date(props.publishedDate) : new Date()
    );
    const [shortDescription, setShortDescription] = useState(props.shortDescription || '');
    const [content, setContent] = useState(props.content || '');
    const { register, handleSubmit: validate, formState: { errors } } = useForm();
    const handleSubmit = e => {
        action({ title, author, publishedDate, shortDescription, content });
    };

    return (
        <Form onSubmit={validate(handleSubmit)}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Title</Form.Label>
                <Form.Control
                    {...register("title", { required: true })}
                    value={title}
                    onChange={e => setTitle(e.target.value)}
                    type="text" placeholder="Enter title"
                />
                {errors.title && <small className="d-block form-text text-danger mt-2">This field is required</small>}
            </Form.Group>
            <Form.Group className='mt-3' controlId="author">
                <Form.Label>Author</Form.Label>
                <Form.Control
                    {...register("author", { required: true, minLength: 3 })}
                    value={author}
                    onChange={e => setAuthor(e.target.value)}
                    type="text"
                />
                {errors.author && errors.author.type === "required" && <small className="d-block form-text text-danger mt-2">This field is required</small>}
                {errors.author && errors.author.type === "minLength" && <small className="d-block form-text text-danger mt-2">Author name is too short (min is 3)</small>}
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
                <textarea
                    {...register("shortDescription", { required: true, minLength: 20 })}
                    value={shortDescription}
                    onChange={e => setShortDescription(e.target.value)}
                    className="form-control"
                    rows={4}
                    placeholder="Enter short description"
                />
                {errors.shortDescription && errors.shortDescription.type === "required" && <small className="d-block form-text text-danger mt-2">This field is required</small>}
                {errors.shortDescription && errors.shortDescription.type === "minLength" && <small className="d-block form-text text-danger mt-2">Short description is too short (min is 20 characters)</small>}
            </Form.Group>
            <Form.Group className='mt-3' controlId="content">
                <Form.Label>Content</Form.Label>
                <ReactQuill  name="shortDescription" value={content} onChange={setContent} required />
            </Form.Group>


            <Button className='mt-3' variant="primary" type="submit">
                {actionText}
            </Button>
        </Form>
    );
};

export default PostForm;
