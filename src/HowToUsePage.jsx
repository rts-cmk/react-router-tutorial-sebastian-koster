import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const CodeBlock = ({ code, language = "jsx" }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="relative my-6 rounded-lg overflow-hidden bg-gray-900 shadow-lg">
      <div className="flex justify-between items-center px-4 py-2 bg-gray-800 border-b border-gray-700">
        <span className="text-xs text-gray-400 uppercase tracking-wide">{language}</span>
        <button
          onClick={handleCopy}
          className="text-xs px-3 py-1 rounded bg-gray-700 text-gray-300 hover:bg-gray-600 transition-colors duration-200"
        >
          {copied ? "✓ Copied!" : "Copy"}
        </button>
      </div>
      <pre className="p-4 overflow-x-auto">
        <code className="text-sm text-gray-100 font-mono">{code}</code>
      </pre>
    </div>
  );
};

const HowToUsePage = () => {
  const navigate = useNavigate();

  const handleNavigateDemo = () => {
    const confirmNav = window.confirm("This demonstrates useNavigate()! Would you like to go to the example page?");
    if (confirmNav) {
      navigate('/example');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 to-purple-50 p-6 pt-12 pb-20">
      {/* Progress Bar */}
      <div className="fixed top-0 left-0 right-0 h-1 bg-gray-200 z-50">
        <div 
          className="h-full bg-gradient-to-r from-blue-500 to-purple-500 transition-all duration-500"
          style={{ width: '42%' }}
        />
      </div>
      
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">How to Use React Router</h1>
          <p className="text-xl text-gray-600">A step-by-step guide</p>
        </div>

        {/* Installation */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-6 hover:shadow-2xl transition-shadow duration-300">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-3xl">📦</span>
            <h2 className="text-2xl font-semibold text-gray-800">Step 1: Installation</h2>
          </div>
          
          <p className="text-gray-600 mb-4">First, install React Router in your project:</p>
          
          <CodeBlock code="npm install react-router-dom" language="bash" />
          
          <div className="bg-blue-50 rounded-lg p-4 mt-4">
            <p className="text-sm text-gray-700">
              <strong>Note:</strong> Make sure you're using React 18 or higher for the best compatibility.
            </p>
          </div>
        </div>

        {/* Setup Router */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-6 hover:shadow-2xl transition-shadow duration-300">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-3xl">⚙️</span>
            <h2 className="text-2xl font-semibold text-gray-800">Step 2: Setup Router</h2>
          </div>
          
          <p className="text-gray-600 mb-4">Create your router configuration in main.jsx:</p>
          
          <CodeBlock code={`import { createBrowserRouter, RouterProvider } from 'react-router-dom';
                  import HomePage from './HomePage';
                  import AboutPage from './AboutPage';

                  const router = createBrowserRouter([
                    { path: '/', element: <HomePage /> },
                    { path: '/about', element: <AboutPage /> },
                  ]);

                  createRoot(document.getElementById('root')).render(
                    <RouterProvider router={router} />
                  );`} />

          <div className="mt-4 p-4 bg-purple-50 rounded-lg">
            <h4 className="font-semibold text-gray-800 mb-2">Key Parts Explained:</h4>
            <ul className="space-y-2 text-sm text-gray-700">
              <li><code className="bg-purple-100 px-2 py-0.5 rounded">path</code> - The URL route (e.g., "/" for homepage)</li>
              <li><code className="bg-purple-100 px-2 py-0.5 rounded">element</code> - The component to render at that route</li>
              <li><code className="bg-purple-100 px-2 py-0.5 rounded">RouterProvider</code> - Wraps your app and provides routing</li>
            </ul>
          </div>
        </div>

        {/* Navigation with Link */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-6 hover:shadow-2xl transition-shadow duration-300">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-3xl">🔗</span>
            <h2 className="text-2xl font-semibold text-gray-800">Step 3: Navigate with Link</h2>
          </div>
          
          <p className="text-gray-600 mb-4">Use the Link component for navigation (like an enhanced anchor tag):</p>
          
          <CodeBlock code={`import { Link } from 'react-router-dom';

                  function Navigation() {
                    return (
                      <nav>
                        <Link to="/">Home</Link>
                        <Link to="/about">About</Link>
                        <Link to="/contact">Contact</Link>
                      </nav>
                    );
                  }`} />

          <div className="bg-blue-50 rounded-lg p-4 mt-4">
            <p className="text-sm text-gray-700 mb-3">
              <strong>Why Link instead of &lt;a&gt;?</strong> Link prevents full page reloads, 
              making navigation instant and smooth!
            </p>
            <div className="flex gap-3">
              <Link to="/welcome" className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors text-sm">
                Try a Link!
              </Link>
              <span className="text-gray-500 self-center">← This uses &lt;Link&gt;</span>
            </div>
          </div>
        </div>

        {/* Navigate Programmatically */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-6 hover:shadow-2xl transition-shadow duration-300">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-3xl">🧭</span>
            <h2 className="text-2xl font-semibold text-gray-800">Step 4: useNavigate Hook</h2>
          </div>
          
          <p className="text-gray-600 mb-4">Navigate programmatically after actions like form submissions:</p>
          
          <CodeBlock code={`import { useNavigate } from 'react-router-dom';

                  function LoginForm() {
                    const navigate = useNavigate();
  
                    const handleSubmit = (e) => {
                      e.preventDefault();
                      // ... login logic
                      navigate('/dashboard'); // Redirect after login
                    };
  
                    return (
                      <form onSubmit={handleSubmit}>
                        {/* form fields */}
                        <button type="submit">Login</button>
                      </form>
                    );
                  }`} />

          <div className="mt-4 bg-gradient-to-r from-purple-50 to-pink-50 rounded-lg p-4">
            <p className="text-sm text-gray-700 mb-3">
              <strong>When to use useNavigate:</strong>
            </p>
            <ul className="text-sm text-gray-700 space-y-1 ml-4">
              <li>• After form submissions</li>
              <li>• After API calls complete</li>
              <li>• In event handlers</li>
              <li>• For redirects based on logic</li>
            </ul>
            <button
              onClick={handleNavigateDemo}
              className="mt-4 px-6 py-3 bg-purple-500 text-white rounded-lg hover:bg-purple-600 transition-colors shadow-md hover:shadow-lg"
            >
              Try useNavigate Example
            </button>
          </div>
        </div>

        {/* Dynamic Routes */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-6 hover:shadow-2xl transition-shadow duration-300">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-3xl">🎯</span>
            <h2 className="text-2xl font-semibold text-gray-800">Step 5: Dynamic Routes</h2>
          </div>
          
          <p className="text-gray-600 mb-4">Create routes with parameters using useParams:</p>
          
          <CodeBlock code={`// In your router config:
                  { path: '/user/:id', element: <UserProfile /> }

                  // In your component:
                  import { useParams } from 'react-router-dom';

                  function UserProfile() {
                    const { id } = useParams();
  
                    return <h1>User Profile: {id}</h1>;
                  }

                  // Links:
                  <Link to="/user/123">User 123</Link>
                  <Link to="/user/456">User 456</Link>`} />

          <div className="bg-green-50 rounded-lg p-4 mt-4">
            <p className="text-sm text-gray-700 mb-2">
              <strong className="text-green-700">✨ Coming up next:</strong> You'll see this in action with real data fetching!
            </p>
          </div>
        </div>

        {/* 404 Handling */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-6 hover:shadow-2xl transition-shadow duration-300">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-3xl">🚫</span>
            <h2 className="text-2xl font-semibold text-gray-800">Step 6: Handle 404 Errors</h2>
          </div>
          
          <p className="text-gray-600 mb-4">Catch all unmatched routes with a wildcard:</p>
          
          <CodeBlock code={`const router = createBrowserRouter([
                    { path: '/', element: <HomePage /> },
                    { path: '/about', element: <AboutPage /> },
                    { path: '*', element: <NotFoundPage /> }, // Catches everything else
                  ]);

                  function NotFoundPage() {
                    return (
                      <div>
                        <h1>404 - Page Not Found</h1>
                        <Link to="/">Go Home</Link>
                      </div>
                    );
                  }`} />

          <div className="bg-yellow-50 rounded-lg p-4 mt-4">
            <p className="text-sm text-gray-700 mb-3">
              <strong>Pro tip:</strong> Put the wildcard route (*) last in your route list. 
              It acts as a catch-all for any unmatched URLs!
            </p>
            <a 
              href="/this-does-not-exist" 
              className="text-blue-600 hover:underline text-sm"
            >
              Try visiting a non-existent page →
            </a>
          </div>
        </div>

        {/* Navigation Buttons */}
        <div className="flex justify-between items-center mt-12 gap-4">
          <Link to="/what-is-router">
            <button className="px-6 py-3 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition-all duration-200 flex items-center gap-2">
              <span>←</span> Previous
            </button>
          </Link>
          
          <Link to="/example">
            <button className="px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-lg hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-200 flex items-center gap-2">
              See Live Example <span>→</span>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HowToUsePage;