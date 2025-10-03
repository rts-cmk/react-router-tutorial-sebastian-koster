import { useState } from 'react';
import { Link } from 'react-router-dom';

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

const WhatIsRouterPage = () => {
  const [activeTab, setActiveTab] = useState('without');

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-blue-50 p-6 pt-12">
      {/* Progress Bar */}
      <div className="fixed top-0 left-0 right-0 h-1 bg-gray-200 z-50">
        <div 
          className="h-full bg-gradient-to-r from-blue-500 to-purple-500 transition-all duration-500"
          style={{ width: '28%' }}
        />
      </div>
      
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
                className={`px-6 py-2 rounded-lg transition-all duration-200 ${
                  activeTab === 'without' 
                    ? 'bg-blue-500 text-white shadow-md' 
                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                }`}
              >
                Without Router
              </button>
              <button
                onClick={() => setActiveTab('with')}
                className={`px-6 py-2 rounded-lg transition-all duration-200 ${
                  activeTab === 'with' 
                    ? 'bg-purple-500 text-white shadow-md' 
                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                }`}
              >
                With Router
              </button>
            </div>

            <div className="transition-all duration-300">
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

          <div className="bg-green-50 border-l-4 border-green-500 p-4 rounded">
            <p className="text-sm text-gray-700">
              <strong className="text-green-700">💡 Did you notice?</strong> This page you're on right now has the URL 
              <code className="bg-green-100 px-2 py-1 rounded mx-1 text-green-800">/what-is-router</code>
              - that's React Router in action!
            </p>
          </div>
        </div>

        {/* Navigation Buttons */}
        <div className="flex justify-between items-center mt-12 gap-4">
          <Link to="/welcome">
            <button className="px-6 py-3 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition-all duration-200 flex items-center gap-2">
              <span>←</span> Previous
            </button>
          </Link>
          
          <Link to="/how-to-use">
            <button className="px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-lg hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-200 flex items-center gap-2">
              Next <span>→</span>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default WhatIsRouterPage;