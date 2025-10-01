import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';


const ExamplePage = () => {
    const [users, setUsers] = useState([]);

    useEffect (() => {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(data => setUsers(data))
        .catch(error => console.error('Error fetching users:', error));
    }, []);

    return (
        <div>
            <h1>Example Page</h1>
            <p>This is an example page demonstrating data fetching and dynamic routing.</p>
            <ul className="list-none">
                {users.map(user => (
                    <li key={user.id}>
                        <Link to={`/example/${user.id}`}>
                        <h2>{user.name}</h2>
                        </Link>
                    </li>
                ))}
            </ul>
            <Link to="/how-to-use">Back to How to Use</Link>
        </div>
    );
};

export default ExamplePage;