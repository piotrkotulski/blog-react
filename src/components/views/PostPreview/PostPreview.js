import React from 'react';
import { Link } from 'react-router-dom';
import { Card, Button } from 'react-bootstrap';
import styles from "./PostPreview.module.scss";

const PostPreview = ({ post }) => {
    return (
        <Card className={styles.card}>
            <Card.Body >
                <Card.Title>{post.title}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">Author: {post.author}</Card.Subtitle>
                <Card.Subtitle className="mb-2 text-muted">Published: {post.publishedDate}</Card.Subtitle>
                <Card.Text>{post.shortDescription}</Card.Text>
                <Link to={`/post/${post.id}`}>
                    <Button variant="primary">Read more</Button>
                </Link>
            </Card.Body>
        </Card>
    );
};

export default PostPreview;