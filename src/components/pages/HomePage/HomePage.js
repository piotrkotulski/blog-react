import React from 'react';
import {Container, Button} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import Posts from '../../features/Posts/Posts';

const HomePage = () => {
    return (
        <Container>
            <div className="d-flex justify-content-between align-items-center">
                <h1 className="my-4">All posts</h1>
                <Link to="/post/add">
                    <Button variant="outline-primary">Add post</Button>
                </Link>
            </div>
            <Posts/>
        </Container>
    );
};

export default HomePage;