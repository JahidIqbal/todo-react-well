import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const Details = () => {
    const { todoId } = useParams();
    const [todo, setTodos] = useState({})
    const [found,] = useState({})
    useEffect(() => {
        const url = `https://jsonplaceholder.typicode.com/todos/${todoId}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setTodos(data));
    }, [])


    let Detail;
    useEffect(() => {

        setTodos(todo);
    }, [todo])


    if (todo.completed === true) {
        Detail = todo
        console.log(Detail)

    }
    else {

        Detail = "Not found"
        console.log(typeof Detail);
    }

    return (
        <div style={{ color: 'red' }} >
            <h3>To do details of:{todoId.length}</h3>
            <h4>id={todo.id}</h4>
            <h4>Title={todo.title}</h4>

            {/* optional */}
            <p>found:{found?.id}</p>

            <p>{Detail.id}</p>
            <p>{Detail.title}</p>

            {Detail.children}


        </div>
    );
};

export default Details;