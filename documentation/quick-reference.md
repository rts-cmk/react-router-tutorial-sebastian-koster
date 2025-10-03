# React Router Quick Reference

## 📦 Installation
```bash
npm install react-router-dom
```

## 🚀 Basic Setup

### Router Configuration (main.jsx)
```jsx
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const router = createBrowserRouter([
  { path: '/', element: <HomePage /> },
  { path: '/about', element: <AboutPage /> },
  { path: '/user/:id', element: <UserPage /> },
  { path: '*', element: <NotFoundPage /> },
]);

createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
);
```

## 🔗 Navigation

### Using Link Component
```jsx
import { Link } from 'react-router-dom';

// Basic link
<Link to="/">Home</Link>
<Link to="/about">About</Link>

// Link with dynamic route
<Link to={`/user/${userId}`}>View User</Link>

// Link with styling
<Link 
  to="/contact" 
  className="text-blue-500 hover:underline"
>
  Contact
</Link>
```

### Using useNavigate Hook
```jsx
import { useNavigate } from 'react-router-dom';

function MyComponent() {
  const navigate = useNavigate();
  
  const handleClick = () => {
    navigate('/dashboard');
  };
  
  const goBack = () => {
    navigate(-1); // Go back one page
  };
  
  const handleLogin = async () => {
    await loginUser();
    navigate('/dashboard', { replace: true }); // Replaces history
  };
  
  return (
    <button onClick={handleClick}>Go to Dashboard</button>
  );
}
```

## 🎯 Dynamic Routes

### Setup Dynamic Route
```jsx
// In router config
{ path: '/user/:id', element: <UserProfile /> }
{ path: '/blog/:slug', element: <BlogPost /> }
{ path: '/product/:category/:id', element: <Product /> }
```

### Access Route Parameters
```jsx
import { useParams } from 'react-router-dom';

function UserProfile() {
  const { id } = useParams();
  
  useEffect(() => {
    fetchUser(id);
  }, [id]);
  
  return <h1>User ID: {id}</h1>;
}
```

### Multiple Parameters
```jsx
function Product() {
  const { category, id } = useParams();
  
  return (
    <div>
      <p>Category: {category}</p>
      <p>Product ID: {id}</p>
    </div>
  );
}
```

## 🚫 404 Handling

### Catch-All Route
```jsx
// Must be LAST in your route list
{ path: '*', element: <NotFoundPage /> }
```

### NotFound Component
```jsx
import { Link } from 'react-router-dom';

function NotFoundPage() {
  return (
    <div>
      <h1>404 - Page Not Found</h1>
      <p>The page you're looking for doesn't exist.</p>
      <Link to="/">Go Home</Link>
    </div>
  );
}
```

## 🔍 Current Location

### useLocation Hook
```jsx
import { useLocation } from 'react-router-dom';

function MyComponent() {
  const location = useLocation();
  
  console.log(location.pathname); // Current path
  console.log(location.search);   // Query string
  console.log(location.hash);     // Hash fragment
  
  return <div>Current path: {location.pathname}</div>;
}
```

## 📊 Common Patterns

### Conditional Navigation
```jsx
function ProtectedRoute() {
  const navigate = useNavigate();
  const isAuthenticated = checkAuth();
  
  useEffect(() => {
    if (!isAuthenticated) {
      navigate('/login');
    }
  }, [isAuthenticated, navigate]);
  
  return <Dashboard />;
}
```

### Navigation with State
```jsx
// Navigate with state
navigate('/profile', { state: { from: 'dashboard' } });

// Access state in destination
function Profile() {
  const location = useLocation();
  const from = location.state?.from;
  
  return <div>Came from: {from}</div>;
}
```

### Active Link Styling
```jsx
import { NavLink } from 'react-router-dom';

<NavLink
  to="/about"
  className={({ isActive }) => 
    isActive ? "text-blue-600 font-bold" : "text-gray-600"
  }
>
  About
</NavLink>
```

### Programmatic Search Params
```jsx
import { useSearchParams } from 'react-router-dom';

function SearchPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  
  const query = searchParams.get('q');
  
  const handleSearch = (value) => {
    setSearchParams({ q: value });
  };
  
  return <input onChange={(e) => handleSearch(e.target.value)} />;
}
```

## 🎨 Advanced Features

### Nested Routes (Layouts)
```jsx
const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: 'about', element: <AboutPage /> },
      { path: 'contact', element: <ContactPage /> },
    ],
  },
]);

// In Layout component
import { Outlet } from 'react-router-dom';

function Layout() {
  return (
    <div>
      <nav>Navigation here</nav>
      <Outlet /> {/* Child routes render here */}
      <footer>Footer here</footer>
    </div>
  );
}
```

### Route Loaders (Data Fetching)
```jsx
const router = createBrowserRouter([
  {
    path: '/user/:id',
    element: <UserProfile />,
    loader: async ({ params }) => {
      return fetch(`/api/users/${params.id}`);
    },
  },
]);

// In component
import { useLoaderData } from 'react-router-dom';

function UserProfile() {
  const user = useLoaderData();
  return <h1>{user.name}</h1>;
}
```

## ⚠️ Common Pitfalls

### ❌ Don't use <a> tags
```jsx
// Bad - causes full page reload
<a href="/about">About</a>

// Good - client-side navigation
<Link to="/about">About</Link>
```

### ❌ Wildcard route placement
```jsx
// Bad - wildcard catches everything
{ path: '*', element: <NotFoundPage /> },
{ path: '/about', element: <AboutPage /> },

// Good - wildcard at the end
{ path: '/about', element: <AboutPage /> },
{ path: '*', element: <NotFoundPage /> },
```

### ❌ Forgetting to handle loading states
```jsx
// Good
function UserProfile() {
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    fetchUser(id).finally(() => setLoading(false));
  }, [id]);
  
  if (loading) return <div>Loading...</div>;
  return <div>Content</div>;
}
```

## 📚 Useful Hooks Summary

| Hook | Purpose | Returns |
|------|---------|---------|
| `useNavigate()` | Programmatic navigation | Function to navigate |
| `useParams()` | Get URL parameters | Object with params |
| `useLocation()` | Current location info | Location object |
| `useSearchParams()` | Query string management | [params, setParams] |
| `useLoaderData()` | Access loader data | Loaded data |
| `NavLink` | Link with active state | Component |

## 🔗 Useful Links

- [Official Docs](https://reactrouter.com)
- [API Reference](https://reactrouter.com/en/main/routers/create-browser-router)
- [GitHub](https://github.com/remix-run/react-router)

---

💡 **Pro Tip**: Always test your routes by navigating through your app and using the browser's back/forward buttons!