import React, { useState } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { getAllPosts, deletePostSuccess, deletePostFailure } from '../../../redux/postRedux'; // Zmieniono importy akcji
import { Button, Container, Modal, Card } from "react-bootstrap";
import styles from "./SinglePost.module.scss";

const SinglePost = () => {
    const { id } = useParams();
    const posts = useSelector(getAllPosts);
    const post = posts.find(post => post.id === id);
    const dispatch = useDispatch();
    const [showModal, setShowModal] = useState(false);

    const handleCloseModal = () => {
        setShowModal(false);
    };

    const handleShowModal = () => {
        setShowModal(true);
    };

    const handleDeleteClick = () => {
        // Pokaż okno modalne z potwierdzeniem usuwania
        handleShowModal();
    };

    const handleConfirmDelete = () => {
        // Wywołaj akcję usuwania posta
        dispatch(deletePostSuccess(id)); // Użyj deletePostSuccess zamiast deletePostAction
    };

    if (!post) {
        return <Navigate to="/" />;
    }

    return (
        <div className='d-flex'>
            <Container>
                <Card className={styles.singlePagePreview}>
                    <Card.Body>
                        <Card.Title as="h3">{post.title}</Card.Title>
                        <Card.Subtitle className="mb-2 mt-4 text-muted">Author: {post.author}</Card.Subtitle>
                        <Card.Subtitle className="mb-4 text-muted">Published: {post.publishedDate}</Card.Subtitle>
                        <Card.Text>{post.shortDescription}</Card.Text>
                    </Card.Body>
                </Card>
            </Container>
            <div className='d-flex ms-2'>
                <Link to={`/post/edit/${id}`}>
                    <Button className='w-150' variant="primary">EDIT</Button>
                </Link>
                <div>
                    <Button className='ms-2' variant="danger" onClick={handleDeleteClick}>DELETE</Button>
                </div>
            </div>
            <Modal show={showModal} onHide={handleCloseModal}>
                <Modal.Header closeButton>
                    <Modal.Title>Confirm Deletion</Modal.Title>
                </Modal.Header>
                <Modal.Body>Are you sure you want to delete this post?</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleCloseModal}>
                        Cancel
                    </Button>
                    <Button variant="danger" onClick={handleConfirmDelete}>
                        Delete
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
};

export default SinglePost;

