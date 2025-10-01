import { Link } from 'react-router-dom';
import { useState } from 'react';

const ConclusionPage = () => {
    const [copied, setCopied] = useState(false);

    const quickReference = `// Quick Reference

// 1. Install
npm install react-router-dom

// 2. Setup (main.jsx)
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

// 3. Navigate with Link
import { Link } from 'react-router-dom';
<Link to="/about">About</Link>

// 4. Navigate programmatically
import { useNavigate } from 'react-router-dom';
const navigate = useNavigate();
navigate('/dashboard');

// 5. Get URL parameters
import { useParams } from 'react-router-dom';
const { id } = useParams();`;

    const handleCopy = () => {
        navigator.clipboard.writeText(quickReference);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-orange-50 p-6 pt-12 pb-20">
            {/* Progress Bar */}
            <div className="fixed top-0 left-0 right-0 h-1 bg-gray-200 z-50">
                <div 
                    className="h-full bg-gradient-to-r from-blue-500 to-purple-500 transition-all duration-500"
                    style={{ width: '85%' }}
                />
            </div>

            <div className="max-w-4xl mx-auto">
                {/* Header */}
                <div className="text-center mb-12">
                    <div className="inline-block p-4 bg-white rounded-full shadow-lg mb-6">
                        <span className="text-5xl">🎉</span>
                    </div>
                    <h1 className="text-4xl font-bold text-gray-800 mb-4">You Did It!</h1>
                    <p className="text-xl text-gray-600">
                        You now understand the fundamentals of React Router
                    </p>
                </div>

                {/* What You Learned */}
                <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
                    <h2 className="text-2xl font-semibold text-gray-800 mb-6">What You've Learned</h2>
                    
                    <div className="space-y-4">
                        {[
                            {
                                icon: "📚",
                                title: "React Router Basics",
                                desc: "Why SPAs need routing and how React Router solves this"
                            },
                            {
                                icon: "⚙️",
                                title: "Installation & Setup",
                                desc: "How to install and configure createBrowserRouter"
                            },
                            {
                                icon: "🔗",
                                title: "Link Component",
                                desc: "Using <Link> for smooth client-side navigation"
                            },
                            {
                                icon: "🧭",
                                title: "useNavigate Hook",
                                desc: "Programmatic navigation after events and actions"
                            },
                            {
                                icon: "🎯",
                                title: "Dynamic Routes",
                                desc: "Creating routes with parameters using useParams"
                            },
                            {
                                icon: "🚫",
                                title: "404 Handling",
                                desc: "Catching unmatched routes with the wildcard (*)"
                            }
                        ].map((item, idx) => (
                            <div 
                                key={idx}
                                className="flex items-start gap-4 p-4 bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl hover:shadow-md transition-shadow"
                            >
                                <span className="text-3xl flex-shrink-0">{item.icon}</span>
                                <div>
                                    <h3 className="font-semibold text-gray-800 mb-1">{item.title}</h3>
                                    <p className="text-gray-600 text-sm">{item.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Quick Reference */}
                <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
                    <div className="flex justify-between items-center mb-4">
                        <h2 className="text-2xl font-semibold text-gray-800">Quick Reference</h2>
                        <button
                            onClick={handleCopy}
                            className="px-4 py-2 bg-purple-500 text-white rounded-lg hover:bg-purple-600 transition-colors text-sm"
                        >
                            {copied ? "✓ Copied!" : "Copy All"}
                        </button>
                    </div>
                    
                    <div className="bg-gray-900 rounded-lg p-6 overflow-x-auto">
                        <pre className="text-sm text-gray-100 font-mono">
                            <code>{quickReference}</code>
                        </pre>
                    </div>
                </div>

                {/* Key Takeaways */}
                <div className="bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl shadow-xl p-8 text-white mb-8">
                    <h2 className="text-2xl font-semibold mb-6">Key Takeaways</h2>
                    
                    <div className="space-y-4">
                        <div className="flex items-start gap-3">
                            <span className="text-2xl">✨</span>
                            <p>React Router enables multi-page experiences in single-page apps</p>
                        </div>
                        <div className="flex items-start gap-3">
                            <span className="text-2xl">⚡</span>
                            <p>Use <code className="bg-white bg-opacity-20 px-2 py-1 rounded">{'<Link>'}</code> for instant navigation without page reloads</p>
                        </div>
                        <div className="flex items-start gap-3">
                            <span className="text-2xl">🎯</span>
                            <p>Dynamic routes with useParams make your apps flexible and data-driven</p>
                        </div>
                        <div className="flex items-start gap-3">
                            <span className="text-2xl">🛡️</span>
                            <p>Always handle 404s with a wildcard (*) route at the end</p>
                        </div>
                    </div>
                </div>

                {/* Next Steps */}
                <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
                    <h2 className="text-2xl font-semibold text-gray-800 mb-4">What's Next?</h2>
                    
                    <div className="space-y-3 text-gray-700">
                        <div className="flex items-start gap-3">
                            <span className="text-xl">📖</span>
                            <div>
                                <strong>Nested Routes:</strong> Learn to create layouts with child routes
                            </div>
                        </div>
                        <div className="flex items-start gap-3">
                            <span className="text-xl">🔒</span>
                            <div>
                                <strong>Protected Routes:</strong> Add authentication guards
                            </div>
                        </div>
                        <div className="flex items-start gap-3">
                            <span className="text-xl">⚡</span>
                            <div>
                                <strong>Loaders & Actions:</strong> Fetch data before rendering
                            </div>
                        </div>
                        <div className="flex items-start gap-3">
                            <span className="text-xl">🎨</span>
                            <div>
                                <strong>Route Transitions:</strong> Add smooth animations between pages
                            </div>
                        </div>
                    </div>

                    <div className="mt-6 p-4 bg-blue-50 rounded-lg">
                        <p className="text-sm text-gray-700">
                            💡 <strong>Pro Tip:</strong> Check out the official React Router documentation at{' '}
                            <a href="https://reactrouter.com" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">
                                reactrouter.com
                            </a>
                        </p>
                    </div>
                </div>

                {/* Navigation Buttons */}
                <div className="flex justify-between items-center gap-4">
                    <Link to="/example">
                        <button className="px-6 py-3 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition-all duration-200 flex items-center gap-2">
                            <span>←</span> Back to Example
                        </button>
                    </Link>
                    
                    <Link to="/outro">
                        <button className="px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-lg hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-200 flex items-center gap-2">
                            Finish <span>🎯</span>
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ConclusionPage;