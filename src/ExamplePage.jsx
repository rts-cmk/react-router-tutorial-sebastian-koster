import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const ExamplePage = () => {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(data => {
                setUsers(data);
                setLoading(false);
            })
            .catch(error => {
                console.error('Error fetching users:', error);
                setLoading(false);
            });
    }, []);

    return (
        <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 p-6 pt-12 pb-20">
            {/* Progress Bar */}
            <div className="fixed top-0 left-0 right-0 h-1 bg-gray-200 z-50">
                <div 
                    className="h-full bg-gradient-to-r from-blue-500 to-purple-500 transition-all duration-500"
                    style={{ width: '57%' }}
                />
            </div>

            <div className="max-w-5xl mx-auto">
                {/* Header */}
                <div className="text-center mb-12">
                    <div className="inline-block p-3 bg-white rounded-full shadow-lg mb-4">
                        <span className="text-4xl">🎯</span>
                    </div>
                    <h1 className="text-4xl font-bold text-gray-800 mb-4">Dynamic Routes in Action</h1>
                    <p className="text-xl text-gray-600">
                        Click any user to see their todos via dynamic routing
                    </p>
                </div>

                {/* Explanation Card */}
                <div className="bg-white rounded-2xl shadow-xl p-6 mb-8">
                    <div className="bg-gradient-to-r from-blue-100 to-purple-100 rounded-xl p-4 mb-4">
                        <h3 className="font-semibold text-gray-800 mb-2">📚 What's Happening Here?</h3>
                        <p className="text-sm text-gray-700">
                            Each user card links to <code className="bg-blue-200 px-2 py-0.5 rounded">/example/:id</code> 
                            - a dynamic route that changes based on the user ID. Watch the URL change when you click!
                        </p>
                    </div>
                    
                    <div className="grid md:grid-cols-2 gap-4 text-sm">
                        <div className="bg-gray-50 rounded-lg p-3">
                            <div className="font-semibold text-gray-700 mb-1">🔗 Link Component</div>
                            <code className="text-xs text-gray-600">
                                {'<Link to={`/example/${user.id}`}>'}
                            </code>
                        </div>
                        <div className="bg-gray-50 rounded-lg p-3">
                            <div className="font-semibold text-gray-700 mb-1">📊 Data Source</div>
                            <div className="text-xs text-gray-600">JSONPlaceholder API</div>
                        </div>
                    </div>
                </div>

                {/* Loading State */}
                {loading ? (
                    <div className="flex justify-center items-center py-20">
                        <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-purple-500"></div>
                    </div>
                ) : (
                    <>
                        {/* Users Grid */}
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                            {users.map((user, index) => (
                                <Link 
                                    key={user.id} 
                                    to={`/example/${user.id}`}
                                    className="group"
                                    style={{ animationDelay: `${index * 50}ms` }}
                                >
                                    <div className="bg-white rounded-xl shadow-md hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 p-6 h-full border-2 border-transparent group-hover:border-purple-300">
                                        {/* User Avatar */}
                                        <div className="flex items-center gap-4 mb-4">
                                            <div className="w-14 h-14 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full flex items-center justify-center text-white text-xl font-bold shadow-lg">
                                                {user.name.charAt(0)}
                                            </div>
                                            <div className="flex-1">
                                                <h2 className="text-lg font-bold text-gray-800 group-hover:text-purple-600 transition-colors">
                                                    {user.name}
                                                </h2>
                                                <p className="text-sm text-gray-500">@{user.username.toLowerCase()}</p>
                                            </div>
                                        </div>

                                        {/* User Info */}
                                        <div className="space-y-2 text-sm text-gray-600">
                                            <div className="flex items-center gap-2">
                                                <span>📧</span>
                                                <span className="truncate">{user.email}</span>
                                            </div>
                                            <div className="flex items-center gap-2">
                                                <span>🏢</span>
                                                <span className="truncate">{user.company.name}</span>
                                            </div>
                                            <div className="flex items-center gap-2">
                                                <span>📍</span>
                                                <span className="truncate">{user.address.city}</span>
                                            </div>
                                        </div>

                                        {/* Click Indicator */}
                                        <div className="mt-4 pt-4 border-t border-gray-100 flex items-center justify-between">
                                            <span className="text-sm text-purple-600 font-medium group-hover:text-purple-700">
                                                View Todos
                                            </span>
                                            <span className="text-purple-500 group-hover:translate-x-1 transition-transform">
                                                →
                                            </span>
                                        </div>
                                    </div>
                                </Link>
                            ))}
                        </div>

                        {/* Info Box */}
                        <div className="bg-white rounded-xl shadow-lg p-6 text-center">
                            <p className="text-gray-600 mb-2">
                                💡 <strong>Try it:</strong> Click any user card to navigate to their todos page
                            </p>
                            <p className="text-sm text-gray-500">
                                Notice how the URL changes to <code className="bg-gray-100 px-2 py-1 rounded">/example/[id]</code>
                            </p>
                        </div>
                    </>
                )}

                {/* Navigation Buttons */}
                <div className="flex justify-between items-center mt-12 gap-4">
                    <Link to="/how-to-use">
                        <button className="px-6 py-3 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition-all duration-200 flex items-center gap-2">
                            <span>←</span> Back to Tutorial
                        </button>
                    </Link>
                    
                    <Link to="/conclusion">
                        <button className="px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-lg hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-200 flex items-center gap-2">
                            Continue <span>→</span>
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ExamplePage;