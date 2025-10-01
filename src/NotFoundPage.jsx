import { Link } from 'react-router-dom';

// not found page
const NotFoundPage = () => {
    return (
        <div className="page">
            <h1>404 - Page Not Found</h1>
            <p>The page you are looking for does not exist.</p>
            <Link to="/welcome">
            <button>Go back to the Welcome Page</button>
            </Link>
        </div>
    );
};

export default NotFoundPage;