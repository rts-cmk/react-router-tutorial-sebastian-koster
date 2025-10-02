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


# React Router Learning Guide - Setup Instructions

## 🚀 Quick Start

### 1. File Structure
Your project should have this structure:
```
src/
├── main.jsx
├── App.jsx
├── WelcomePage.jsx
├── WhatIsRouterPage.jsx
├── HowToUsePage.jsx
├── ExamplePage.jsx
├── ExampleItemsPage.jsx
├── ConclusionPage.jsx
├── OutroPage.jsx
└── NotFoundPage.jsx
./components/
└─ SharedComponents.jsx (optional)
```

### 2. Dependencies
Make sure you have these installed:
```bash
npm install react-router-dom
```

Your package.json should include:
- React 18+
- React Router DOM 6+
- Tailwind CSS (already configured in your Vite project)

### 3. Replace Your Files

Replace the content of each file with the styled versions I provided:

1. **WelcomePage.jsx** - The intro page with animated elements
2. **WhatIsRouterPage.jsx** - Explanation with code comparisons
3. **HowToUsePage.jsx** - Step-by-step tutorial
4. **ExamplePage.jsx** - Users list with dynamic routing
5. **ExampleItemsPage.jsx** - Individual user's todos
6. **ConclusionPage.jsx** - Summary and key takeaways
7. **OutroPage.jsx** - Final celebration page
8. **NotFoundPage.jsx** - Styled 404 handler
9. **App.jsx** - Auto-redirects to welcome
10. **SharedComponents.jsx** - Reusable components (optional)

### 4. Update main.jsx (if needed)

Your main.jsx looks good! Just verify the imports match your file names:

```jsx
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

// Pages
import ConclusionPage from './ConclusionPage.jsx'
import Example from './ExamplePage.jsx'
import ExampleItems from './ExampleItemsPage.jsx'
import HowToUse from './HowToUsePage.jsx'
import Outro from './OutroPage.jsx'
import Welcome from './WelcomePage.jsx'
import WhatIsRouter from './WhatIsRouterPage.jsx'
import NotFoundPage from './NotFoundPage.jsx'

const router = createBrowserRouter([
  {path: '/', element: <App />},
  {path: '/welcome', element: <Welcome />},
  {path: '/what-is-router', element: <WhatIsRouter />},
  {path: '/how-to-use', element: <HowToUse />},
  {path: '/example', element: <Example />},
  {path: '/example/:id', element: <ExampleItems />},
  {path: '/conclusion', element: <ConclusionPage />},
  {path: '/outro', element: <Outro />},
  {path: '*', element: <NotFoundPage />},
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
```

## 🎨 Design Features

### Color Scheme
- **Blue-Purple gradient** - Primary branding
- **Soft pastels** - Background colors for each page
- **White cards** - Content containers with shadows
- **Accent colors** - For stats, tips, and interactive elements

### Interactive Elements
- ✅ **Progress bar** - Shows completion across all pages
- ✅ **Hover effects** - Cards lift and glow on hover
- ✅ **Smooth transitions** - Page content fades in
- ✅ **Animated elements** - Bouncing icons, floating confetti
- ✅ **Copy buttons** - On all code blocks
- ✅ **Loading states** - Spinners while fetching data
- ✅ **Dynamic routing demo** - Real API data with JSONPlaceholder

### Page Flow
1. **/** → Auto-redirects to welcome
2. **/welcome** → Introduction (Step 1/7)
3. **/what-is-router** → Concept explanation (Step 2/7)
4. **/how-to-use** → Detailed tutorial (Step 3/7)
5. **/example** → User list demo (Step 4/7)
6. **/example/:id** → Individual user todos (Step 5/7)
7. **/conclusion** → Summary & quick reference (Step 6/7)
8. **/outro** → Celebration page (Step 7/7)
9. **/** (any invalid route) → 404 page

## 🛠️ Customization

### Change Colors
Edit the Tailwind classes in each component:
- `from-blue-500 to-purple-500` - Gradient colors
- `bg-gray-50` - Background colors
- `text-gray-800` - Text colors

### Adjust Progress Bar
In each page, find this line and adjust the percentage:
```jsx
style={{ width: '42%' }} // Change this value
```

### Modify Content
All text content is in the JSX - just edit the strings directly!

### Add More Pages
1. Create new component file
2. Add route to `main.jsx`
3. Update navigation buttons to link to it
4. Adjust progress bar percentages

## 📱 Responsive Design

All pages are mobile-friendly:
- Grid layouts collapse on small screens
- Text sizes scale appropriately
- Touch-friendly button sizes
- Horizontal scrolling on code blocks

## 🎯 Learning Objectives Met

✅ Demonstrates all React Router concepts
✅ Shows real-world data fetching example
✅ Interactive and engaging UI
✅ Clear code examples with syntax highlighting
✅ Progressive difficulty (welcome → advanced)
✅ Educational tooltips and explanations
✅ 404 handling demonstration

## 🐛 Troubleshooting

### Issue: Styles not showing
- Make sure Tailwind CSS is properly configured
- Check that your `tailwind.config.js` includes all JSX files
- Run `npm run dev` to restart the dev server

### Issue: Routes not working
- Verify all imports in `main.jsx`
- Check that file names match exactly
- Make sure React Router DOM is installed

### Issue: API not loading
- Check your internet connection
- JSONPlaceholder might be down (rare)
- Check browser console for CORS errors

## 🚀 Running the Project

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build
```

## 📚 Next Steps

After completing this guide, users can explore:
- Nested routes with layouts
- Protected routes with authentication
- Route loaders and actions (React Router v6.4+)
- Route animations and transitions
- Search params and query strings
- Outlet component for nested routing

## 💡 Tips for Presenting

1. Start at `/welcome` to show the full experience
2. Emphasize the meta-learning approach (learning routing BY using routing)
3. Point out the URL changes as you navigate
4. Show the 404 page by visiting `/anything-invalid`
5. Demonstrate the useParams by clicking different users
6. Use the copy buttons to show code examples
7. Highlight the progress bar showing learning journey

---

Built with ❤️ using React + Vite + Tailwind CSS + React Router