import { useEffect } from "react";
import { useState } from "react";
import { useParams, Link } from "react-router-dom";

const ExampleItemsPage = () => {

    const {id} = useParams();
    const [todos, setTodos] = useState([]);

    useEffect (() => {
        fetch(`https://jsonplaceholder.typicode.com/users/${id}/todos`)
        .then(response => response.json())
        .then(data => setTodos(data))
        .catch(error => console.error('Error fetching todos:', error));
    }, [id]);

    return (
        <div>
            <h1>Example Items Page</h1>
            <p>This page demonstrates dynamic routing by fetching and displaying items based on the ID in the URL.</p>
            <ul>
                {todos.map(todo => (
                    <li key={todo.id}>
                        <h2>{todo.title}</h2>
                        <p>Status: {todo.completed ? 'Completed' : 'Pending'}</p>
                    </li>
                ))}
            </ul>
            <Link to="/example">Back to Example Page</Link>
        </div>
    )

}

export default ExampleItemsPage;