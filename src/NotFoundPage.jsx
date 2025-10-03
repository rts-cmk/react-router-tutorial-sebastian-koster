import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

const NotFoundPage = () => {
    const [rotation, setRotation] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setRotation(prev => (prev + 1) % 360);
        }, 50);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="min-h-screen bg-gradient-to-br from-red-50 via-orange-50 to-yellow-50 flex items-center justify-center p-6 relative overflow-hidden">
            
            <div className="absolute inset-0 opacity-10">
                <div 
                    className="absolute top-1/4 left-1/4 w-64 h-64 bg-red-400 rounded-full blur-3xl"
                    style={{ transform: `rotate(${rotation}deg) translateX(50px)` }}
                />
                <div 
                    className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-orange-400 rounded-full blur-3xl"
                    style={{ transform: `rotate(${-rotation}deg) translateX(-50px)` }}
                />
            </div>

            <div className="max-w-2xl w-full relative z-10">
                {/* 404 Display */}
                <div className="text-center mb-8">
                    <div className="relative inline-block">
                        <h1 className="text-9xl font-bold text-gray-800 mb-4 animate-pulse">
                            404
                        </h1>
                        <div className="absolute -top-8 -right-8 text-6xl animate-bounce">
                            🔍
                        </div>
                    </div>
                </div>

                {/* Main Content */}
                <div className="bg-white bg-opacity-90 backdrop-blur rounded-2xl shadow-2xl p-8 text-center">
                    <h2 className="text-3xl font-bold text-gray-800 mb-4">
                        Oops! Page Not Found
                    </h2>
                    
                    <p className="text-xl text-gray-600 mb-6">
                        Looks like this route doesn't exist in our React Router configuration
                    </p>

                    
                    <div className="bg-gradient-to-r from-orange-100 to-red-100 rounded-xl p-6 mb-8">
                        <h3 className="font-semibold text-gray-800 mb-3">
                            🎓 This is the 404 handler in action!
                        </h3>
                        <p className="text-sm text-gray-700 text-left mb-4">
                            In <code className="bg-orange-200 px-2 py-1 rounded">main.jsx</code>, we set up a wildcard route:
                        </p>
                        <div className="bg-gray-900 rounded-lg p-4 text-left">
                            <code className="text-sm text-gray-100 font-mono">
                                {'{'} path: '*', element: {'<NotFoundPage />'} {'}'}
                            </code>
                        </div>
                        <p className="text-xs text-gray-600 text-left mt-3">
                            The asterisk (*) catches all unmatched routes and displays this page!
                        </p>
                    </div>

                    
                    <div className="mb-8">
                        <p className="text-gray-700 font-medium mb-4">
                            Here are some places you can go:
                        </p>
                        
                        <div className="grid sm:grid-cols-2 gap-3">
                            <Link to="/welcome">
                                <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-4 rounded-lg hover:shadow-lg transition-all duration-200 border-2 border-transparent hover:border-purple-300">
                                    <div className="text-2xl mb-2">🏠</div>
                                    <div className="font-semibold text-gray-800">Welcome Page</div>
                                    <div className="text-xs text-gray-600">Start from the beginning</div>
                                </div>
                            </Link>

                            <Link to="/example">
                                <div className="bg-gradient-to-r from-green-50 to-teal-50 p-4 rounded-lg hover:shadow-lg transition-all duration-200 border-2 border-transparent hover:border-teal-300">
                                    <div className="text-2xl mb-2">🎯</div>
                                    <div className="font-semibold text-gray-800">Live Example</div>
                                    <div className="text-xs text-gray-600">See routing in action</div>
                                </div>
                            </Link>

                            <Link to="/conclusion">
                                <div className="bg-gradient-to-r from-purple-50 to-pink-50 p-4 rounded-lg hover:shadow-lg transition-all duration-200 border-2 border-transparent hover:border-pink-300">
                                    <div className="text-2xl mb-2">📚</div>
                                    <div className="font-semibold text-gray-800">Conclusion</div>
                                    <div className="text-xs text-gray-600">Review what you learned</div>
                                </div>
                            </Link>

                            <Link to="/outro">
                                <div className="bg-gradient-to-r from-yellow-50 to-orange-50 p-4 rounded-lg hover:shadow-lg transition-all duration-200 border-2 border-transparent hover:border-orange-300">
                                    <div className="text-2xl mb-2">🏆</div>
                                    <div className="font-semibold text-gray-800">Outro</div>
                                    <div className="text-xs text-gray-600">Complete the guide</div>
                                </div>
                            </Link>
                        </div>
                    </div>

                    <Link to="/welcome">
                        <button className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white text-lg rounded-full hover:shadow-2xl transform hover:scale-105 transition-all duration-300 inline-flex items-center gap-3">
                            <span>←</span> Back to Safety
                        </button>
                    </Link>
                </div>

                <div className="text-center mt-8">
                    <p className="text-sm text-gray-600">
                        💡 <strong>Fun Fact:</strong> HTTP 404 errors were named after room 404 at CERN where the web was born!
                    </p>
                </div>
            </div>
        </div>
    );
}

export default NotFoundPage;