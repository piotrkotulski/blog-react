import React from 'react';
import { Link } from 'react-router-dom';
import { Card, Button } from 'react-bootstrap';
import styles from "./PostPreview.module.scss";
import dateToStr from '../../../utils/dateToStr';

const PostPreview = ({ post }) => {
    console.log(post);
    return (
        <Card className={styles.card}>
            <Card.Body >
                <Card.Title>{post.title}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">Author: {post.author}</Card.Subtitle>
                <Card.Subtitle className="mb-4 text-muted">
                    Published: {dateToStr(post.publishedDate)}
                </Card.Subtitle>
                 <Card.Subtitle className="mb-2 text-muted">Category: {post.category}</Card.Subtitle>
                <Card.Text dangerouslySetInnerHTML={{ __html: post.shortDescription }} />
                <Link to={`/post/${post.id}`}>
                    <Button variant="primary">Read more</Button>
                </Link>
            </Card.Body>
        </Card>
    );
};

export default PostPreview;