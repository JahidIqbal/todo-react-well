import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import Todo from '../Todo/Todo';

const Todos = () => {
    const [todos, setTodos] = useState([])
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/todos')
            .then(res => res.json())
            .then(data => setTodos(data))
    }, [])
    return (
        <div>

            <Row xs={1} md={3} className="g-4">
                {
                    todos.map(todo => <Todo
                        key={todo.id}
                        todo={todo}></Todo>)
                }

            </Row>

        </div>
    );
};

export default Todos;


