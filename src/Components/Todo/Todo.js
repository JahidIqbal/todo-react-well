import React from 'react';
import { Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Todo = (props) => {
    const { id, title, completed } = props.todo;
    const url = `/todo/${id}`
    return (
        <Col>
            <Card>

                <Card.Body>
                    <p>id:{id}</p>
                    <Card.Title>{title}</Card.Title>
                    <Card.Text>
                        {completed.toString()}
                    </Card.Text>

                </Card.Body>
                <Link to={url}>Visit me</Link>
            </Card>

        </Col>
    );
};

export default Todo;