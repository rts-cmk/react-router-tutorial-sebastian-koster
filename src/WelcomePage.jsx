import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import './index.css'

// Shared Components
const ProgressBar = ({ currentStep, totalSteps }) => {
    const progress = (currentStep / totalSteps) * 100;

    return (
        <div className="fixed top-0 left-0 right-0 h-1 bg-gray-200 z-50">
            <div
                className="h-full bg-gradient-to-r from-blue-500 to-purple-500 transition-all duration-500 ease-out"
                style={{ width: `${progress}%` }}
            />
        </div>
    );
};

const NavigationButtons = ({ prevLink, nextLink, prevText = "Previous", nextText = "Next" }) => {
    return (
        <div className="flex justify-between items-center mt-12 gap-4">
            {prevLink ? (
                <Link to={prevLink}>
                    <button className="px-6 py-3 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition-all duration-200 flex items-center gap-2">
                        <span>←</span> {prevText}
                    </button>
                </Link>
            ) : <div />}

            {nextLink && (
                <Link to={nextLink}>
                    <button className="px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-lg hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-200 flex items-center gap-2">
                        {nextText} <span>→</span>
                    </button>
                </Link>
            )}
        </div>
    );
};

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
                <span className="text-xs text-gray-400 uppercase">{language}</span>
                <button
                    onClick={handleCopy}
                    className="text-xs px-3 py-1 rounded bg-gray-700 text-gray-300 hover:bg-gray-600 transition-colors"
                >
                    {copied ? "Copied!" : "Copy"}
                </button>
            </div>
            <pre className="p-4 overflow-x-auto">
                <code className="text-sm text-gray-100">{code}</code>
            </pre>
        </div>
    );
};

// Welcome Page
export const WelcomePage = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        setIsVisible(true);
    }, []);

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 flex items-center justify-center p-6">
            <ProgressBar currentStep={1} totalSteps={7} />

            <div className={`max-w-2xl w-full transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                <div className="text-center mb-8">
                    <div className="inline-block p-4 bg-white rounded-full shadow-lg mb-6 animate-bounce">
                        <svg className="w-16 h-16 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                        </svg>
                    </div>

                    <h1 className="text-5xl font-bold text-gray-800 mb-4">
                        Welcome to React Router
                    </h1>

                    <p className="text-xl text-gray-600 mb-8">
                        Learn routing in React by experiencing it firsthand!
                    </p>
                </div>

                <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
                    <h2 className="text-2xl font-semibold text-gray-800 mb-4">What You'll Learn</h2>

                    <div className="space-y-4">
                        {[
                            { icon: "📚", title: "The Basics", desc: "Understanding what React Router is and why it matters" },
                            { icon: "⚙️", title: "Installation", desc: "Setting up React Router in your project" },
                            { icon: "🏗️", title: "Multiple Pages", desc: "Creating and organizing different routes" },
                            { icon: "🧭", title: "Navigation", desc: "Using Link and useNavigate for movement" },
                            { icon: "🚫", title: "404 Handling", desc: "Managing routes that don't exist" }
                        ].map((item, idx) => (
                            <div
                                key={idx}
                                className="flex items-start gap-4 p-4 rounded-lg hover:bg-gray-50 transition-colors"
                                style={{ animationDelay: `${idx * 100}ms` }}
                            >
                                <span className="text-3xl">{item.icon}</span>
                                <div>
                                    <h3 className="font-semibold text-gray-800">{item.title}</h3>
                                    <p className="text-gray-600 text-sm">{item.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="text-center">
                    <Link to="/what-is-router">
                        <button className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white text-lg rounded-full hover:shadow-2xl transform hover:scale-105 transition-all duration-300 flex items-center gap-3 mx-auto">
                            Let's Get Started! <span className="text-2xl"></span>
                        </button>
                    </Link>
                </div>

                <p className="text-center text-gray-500 text-sm mt-6">
                    This interactive guide uses React Router itself to teach you!
                </p>
            </div>
        </div>
    );
};

// What Is Router Page
export const WhatIsRouterPage = () => {
    const [activeTab, setActiveTab] = useState('without');

    return (
        <div className="min-h-screen bg-gradient-to-br from-purple-50 to-blue-50 p-6 pt-12">
            <ProgressBar currentStep={2} totalSteps={7} />

            <div className="max-w-4xl mx-auto">
                <div className="text-center mb-12">
                    <h1 className="text-4xl font-bold text-gray-800 mb-4">What is React Router?</h1>
                    <p className="text-xl text-gray-600">Navigation for Single Page Applications</p>
                </div>

                <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
                    <div className="mb-6">
                        <h2 className="text-2xl font-semibold text-gray-800 mb-4">The Problem</h2>
                        <p className="text-gray-600 leading-relaxed">
                            React creates Single Page Applications (SPAs) - your entire app runs on one HTML page.
                            But users expect multiple "pages" with different URLs. How do we create that experience?
                        </p>
                    </div>

                    <div className="bg-gradient-to-r from-blue-100 to-purple-100 rounded-xl p-6 mb-6">
                        <h3 className="text-xl font-semibold text-gray-800 mb-3">🎯 The Solution: React Router</h3>
                        <p className="text-gray-700">
                            React Router lets you create different views at different URLs, all while staying in a single page app.
                            It handles the browser's URL and shows the right components without page refreshes!
                        </p>
                    </div>

                    <div className="mb-6">
                        <h3 className="text-xl font-semibold text-gray-800 mb-4">See the Difference</h3>

                        <div className="flex gap-2 mb-4">
                            <button
                                onClick={() => setActiveTab('without')}
                                className={`px-6 py-2 rounded-lg transition-all ${activeTab === 'without' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'}`}
                            >
                                Without Router
                            </button>
                            <button
                                onClick={() => setActiveTab('with')}
                                className={`px-6 py-2 rounded-lg transition-all ${activeTab === 'with' ? 'bg-purple-500 text-white' : 'bg-gray-200 text-gray-700'}`}
                            >
                                With Router
                            </button>
                        </div>

                        {activeTab === 'without' ? (
                            <CodeBlock code={`function App() {
                            const [page, setPage] = useState('home');
  
                            return (
                                <div>
                                <button onClick={() => setPage('home')}>Home</button>
                                <button onClick={() => setPage('about')}>About</button>
      
                                {page === 'home' && <HomePage />}
                                {page === 'about' && <AboutPage />}
                                </div>
                            );
                            }

                            // ❌ Problems:
                            // - URL doesn't change
                            // - Can't bookmark pages
                            // - Browser back button doesn't work
                            // - Can't share specific pages`} />
                        ) : (
                            <CodeBlock code={`function App() {
                            return (
                                <BrowserRouter>
                                <nav>
                                    <Link to="/">Home</Link>
                                    <Link to="/about">About</Link>
                                </nav>
      
                                <Routes>
                                    <Route path="/" element={<HomePage />} />
                                    <Route path="/about" element={<AboutPage />} />
                                </Routes>
                                </BrowserRouter>
                            );
                            }

                            // ✅ Benefits:
                            // - URLs change (/, /about)
                            // - Can bookmark any page
                            // - Browser navigation works
                            // - Shareable links!`} />
                        )}
                    </div>
                </div>

                <NavigationButtons prevLink="/welcome" nextLink="/how-to-use" />
            </div>
        </div>
    );
};

// How To Use Page
export const HowToUsePage = () => {
    const [step, setStep] = useState(1);

    return (
        <div className="min-h-screen bg-gradient-to-br from-pink-50 to-purple-50 p-6 pt-12">
            <ProgressBar currentStep={3} totalSteps={7} />

            <div className="max-w-4xl mx-auto">
                <div className="text-center mb-12">
                    <h1 className="text-4xl font-bold text-gray-800 mb-4">How to Use React Router</h1>
                    <p className="text-xl text-gray-600">A step-by-step guide</p>
                </div>

                {/* Installation */}
                <div className="bg-white rounded-2xl shadow-xl p-8 mb-6">
                    <div className="flex items-center gap-3 mb-4">
                        <span className="text-3xl">📦</span>
                        <h2 className="text-2xl font-semibold text-gray-800">Step 1: Installation</h2>
                    </div>

                    <p className="text-gray-600 mb-4">First, install React Router in your project:</p>

                    <CodeBlock code="npm install react-router-dom" language="bash" />
                </div>

                {/* Setup Router */}
                <div className="bg-white rounded-2xl shadow-xl p-8 mb-6">
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
                </div>

                {/* Navigation with Link */}
                <div className="bg-white rounded-2xl shadow-xl p-8 mb-6">
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
                        <p className="text-sm text-gray-700">
                            <strong>Why Link instead of {'<a>'}?</strong> Link prevents full page reloads,
                            making navigation instant and smooth!
                        </p>
                    </div>
                </div>

                {/* Navigate Programmatically */}
                <div className="bg-white rounded-2xl shadow-xl p-8 mb-6">
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
  
                            return <form onSubmit={handleSubmit}>...</form>;
                            }`} />

                    <div className="mt-4">
                        <button
                            onClick={() => {
                                alert("This would navigate programmatically!");
                            }}
                            className="px-6 py-3 bg-purple-500 text-white rounded-lg hover:bg-purple-600 transition-colors"
                        >
                            Try useNavigate Example
                        </button>
                    </div>
                </div>

                {/* Dynamic Routes */}
                <div className="bg-white rounded-2xl shadow-xl p-8 mb-6">
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

                    <p className="text-gray-600 mt-4">
                        Ready to see this in action? Let's check out a real example with data fetching!
                    </p>
                </div>

                {/* 404 Handling */}
                <div className="bg-white rounded-2xl shadow-xl p-8 mb-6">
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
                        <p className="text-sm text-gray-700">
                            <strong>Pro tip:</strong> Put the wildcard route (*) last in your route list.
                            It acts as a catch-all for any unmatched URLs!
                        </p>
                    </div>
                </div>

                <NavigationButtons prevLink="/what-is-router" nextLink="/example" />
            </div>
        </div>
    );
};

// Export all pages as default for demo
export default function Demo() {
    const [currentPage, setCurrentPage] = useState('welcome');

    const pages = {
        welcome: <WelcomePage />,
        'what-is-router': <WhatIsRouterPage />,
        'how-to-use': <HowToUsePage />
    };

    return (
        <div>
            <div className="fixed top-4 right-4 z-50 bg-white rounded-lg shadow-lg p-2">
                <select
                    value={currentPage}
                    onChange={(e) => setCurrentPage(e.target.value)}
                    className="px-3 py-2 rounded border"
                >
                    <option value="welcome">Welcome</option>
                    <option value="what-is-router">What Is Router</option>
                    <option value="how-to-use">How To Use</option>
                </select>
            </div>
            {pages[currentPage]}
        </div>
    );
}