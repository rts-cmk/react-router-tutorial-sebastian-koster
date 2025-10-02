import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

const OutroPage = () => {
    const [showConfetti, setShowConfetti] = useState(false);

    useEffect(() => {
        setShowConfetti(true);
    }, []);

    return (
        <div className="min-h-screen bg-gradient-to-br from-violet-50 via-purple-50 to-fuchsia-50 flex items-center justify-center p-6 relative overflow-hidden">
            {/* Progress Bar - Complete */}
            <div className="fixed top-0 left-0 right-0 h-1 bg-gray-200 z-50">
                <div 
                    className="h-full bg-gradient-to-r from-green-500 to-emerald-500 transition-all duration-1000"
                    style={{ width: '100%' }}
                />
            </div>

            
            {showConfetti && (
                <div className="absolute inset-0 pointer-events-none">
                    {[...Array(30)].map((_, i) => (
                        <div
                            key={i}
                            className="absolute animate-float"
                            style={{
                                left: `${Math.random() * 100}%`,
                                top: `-20px`,
                                animationDelay: `${Math.random() * 2}s`,
                                animationDuration: `${3 + Math.random() * 2}s`
                            }}
                        >
                            <span className="text-2xl">
                                {['🎉', '🎊', '⭐', '✨', '🚀', '💫'][Math.floor(Math.random() * 6)]}
                            </span>
                        </div>
                    ))}
                </div>
            )}

            <div className="max-w-3xl w-full relative z-10">
                {/* Success Badge */}
                <div className="text-center mb-8">
                    <div className="inline-block relative">
                        <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full animate-pulse blur-xl opacity-50"></div>
                        <div className="relative bg-white p-8 rounded-full shadow-2xl">
                            <span className="text-7xl">🏆</span>
                        </div>
                    </div>
                </div>

                {/* Main Content */}
                <div className="bg-white bg-opacity-90 backdrop-blur rounded-3xl shadow-2xl p-10 text-center">
                    <h1 className="text-5xl font-bold text-gray-800 mb-4">
                        Congratulations!
                    </h1>
                    
                    <p className="text-2xl text-gray-600 mb-8">
                        You've completed the React Router guide
                    </p>

                    <div className="bg-gradient-to-r from-purple-100 to-pink-100 rounded-2xl p-6 mb-8">
                        <p className="text-lg text-gray-700 leading-relaxed">
                            You've learned how to navigate between pages, create dynamic routes, 
                            handle URL parameters, and manage 404 errors. These are essential skills 
                            for building modern React applications!
                        </p>
                    </div>

                    {/* Achievement Stats */}
                    <div className="grid md:grid-cols-3 gap-4 mb-8">
                        <div className="bg-blue-50 rounded-xl p-6">
                            <div className="text-4xl font-bold text-blue-600 mb-2">7</div>
                            <div className="text-sm text-gray-600">Pages Completed</div>
                        </div>
                        <div className="bg-green-50 rounded-xl p-6">
                            <div className="text-4xl font-bold text-green-600 mb-2">6</div>
                            <div className="text-sm text-gray-600">Concepts Mastered</div>
                        </div>
                        <div className="bg-purple-50 rounded-xl p-6">
                            <div className="text-4xl font-bold text-purple-600 mb-2">100%</div>
                            <div className="text-sm text-gray-600">Guide Progress</div>
                        </div>
                    </div>

                    {/* Call to Action */}
                    <div className="space-y-4">
                        <p className="text-gray-700 font-medium">
                            Ready to start building with React Router?
                        </p>
                        
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link to="/welcome">
                                <button className="px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full hover:shadow-2xl transform hover:scale-105 transition-all duration-300 flex items-center gap-2 mx-auto sm:mx-0">
                                    <span>🔄</span> Review Guide
                                </button>
                            </Link>
                            
                            <a 
                                href="https://reactrouter.com" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="px-8 py-4 bg-white border-2 border-purple-500 text-purple-600 rounded-full hover:bg-purple-50 transition-all duration-300 flex items-center gap-2 mx-auto sm:mx-0"
                            >
                                <span>📚</span> Official Docs
                            </a>
                        </div>
                    </div>

                    {/* Easter Egg */}
                    <div className="mt-8 pt-8 border-t border-gray-200">
                        <p className="text-sm text-gray-500 mb-3">
                             Want to test your 404 page?
                        </p>
                        <a 
                            href="/this-route-does-not-exist" 
                            className="text-purple-600 hover:text-purple-700 text-sm underline"
                        >
                            Click here to visit a non-existent route
                        </a>
                    </div>
                </div>

                
                <div className="text-center mt-8">
                    <p className="text-gray-600 text-sm">
                        Built with React Router
                    </p>
                </div>
            </div>

            {/* CSS for animations */}
            <style>{`
                @keyframes float {
                    0% {
                        transform: translateY(-20px) rotate(0deg);
                        opacity: 1;
                    }
                    100% {
                        transform: translateY(100vh) rotate(360deg);
                        opacity: 0;
                    }
                }
                .animate-float {
                    animation: float linear infinite;
                }
            `}</style>
        </div>
    );
};

export default OutroPage;