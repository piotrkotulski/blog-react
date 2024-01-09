import React from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getAllPosts } from '../../../redux/postRedux';
import { Link } from 'react-router-dom';
import {Button, Card, Container} from 'react-bootstrap';
import styles from './SinglePost.module.scss'

const SinglePost = () => {
    const { id } = useParams();
    const posts = useSelector(getAllPosts);
    const post = posts.find((post) => post.id === id);

    if (!post) {
        return <div>Post not found</div>;
    }

    return (
        <Container>
            <div className='d-flex justify-content-between'>
            <Card className={styles.singlePagePreview}>
                <Card.Body >
                    <Card.Title as='h3'>{post.title}</Card.Title>
                    <Card.Subtitle className="mb-2 mt-3 text-muted">Author: {post.author}</Card.Subtitle>
                    <Card.Subtitle className="mb-2 text-muted">Published: {post.publishedDate}</Card.Subtitle>
                    <Card.Text>{post.shortDescription}</Card.Text>
                </Card.Body>
            </Card>
                <div className='d-flex'>
            <Link to={`/post/edit/${id}`}>
                <Button className='w-100 me-4' variant="primary">Edit</Button>
            </Link>
                    <div>
            <Button className='w-100 ms-2' variant="danger">Delete</Button>
                    </div>
                </div>
            </div>
        </Container>
    );
};

export default SinglePost;