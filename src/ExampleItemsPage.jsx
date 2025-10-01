import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

const ExampleItemsPage = () => {
    const { id } = useParams();
    const [todos, setTodos] = useState([]);
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Fetch both user info and todos
        Promise.all([
            fetch(`https://jsonplaceholder.typicode.com/users/${id}`).then(res => res.json()),
            fetch(`https://jsonplaceholder.typicode.com/users/${id}/todos`).then(res => res.json())
        ])
        .then(([userData, todosData]) => {
            setUser(userData);
            setTodos(todosData);
            setLoading(false);
        })
        .catch(error => {
            console.error('Error fetching data:', error);
            setLoading(false);
        });
    }, [id]);

    const completedCount = todos.filter(todo => todo.completed).length;
    const pendingCount = todos.length - completedCount;

    return (
        <div className="min-h-screen bg-gradient-to-br from-teal-50 via-blue-50 to-indigo-50 p-6 pt-12 pb-20">
            {/* Progress Bar */}
            <div className="fixed top-0 left-0 right-0 h-1 bg-gray-200 z-50">
                <div 
                    className="h-full bg-gradient-to-r from-blue-500 to-purple-500 transition-all duration-500"
                    style={{ width: '71%' }}
                />
            </div>

            <div className="max-w-4xl mx-auto">
                {loading ? (
                    <div className="flex justify-center items-center py-20">
                        <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-teal-500"></div>
                    </div>
                ) : (
                    <>
                        {/* Header with User Info */}
                        <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
                            <div className="flex items-center gap-6 mb-6">
                                <div className="w-20 h-20 bg-gradient-to-br from-teal-400 to-blue-500 rounded-full flex items-center justify-center text-white text-3xl font-bold shadow-lg">
                                    {user?.name.charAt(0)}
                                </div>
                                <div className="flex-1">
                                    <h1 className="text-3xl font-bold text-gray-800">{user?.name}'s Todos</h1>
                                    <p className="text-gray-600">@{user?.username.toLowerCase()}</p>
                                </div>
                            </div>

                            {/* Stats */}
                            <div className="grid grid-cols-3 gap-4">
                                <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-4 text-center">
                                    <div className="text-3xl font-bold text-blue-600">{todos.length}</div>
                                    <div className="text-sm text-gray-600">Total Tasks</div>
                                </div>
                                <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-xl p-4 text-center">
                                    <div className="text-3xl font-bold text-green-600">{completedCount}</div>
                                    <div className="text-sm text-gray-600">Completed</div>
                                </div>
                                <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-xl p-4 text-center">
                                    <div className="text-3xl font-bold text-orange-600">{pendingCount}</div>
                                    <div className="text-sm text-gray-600">Pending</div>
                                </div>
                            </div>
                        </div>

                        {/* Dynamic Route Explanation */}
                        <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
                            <div className="bg-gradient-to-r from-purple-100 to-pink-100 rounded-lg p-4">
                                <h3 className="font-semibold text-gray-800 mb-2">🎯 useParams in Action!</h3>
                                <p className="text-sm text-gray-700 mb-3">
                                    The URL parameter <code className="bg-purple-200 px-2 py-0.5 rounded font-mono">:id</code> was 
                                    extracted using <code className="bg-purple-200 px-2 py-0.5 rounded font-mono">useParams()</code> 
                                    and used to fetch data for user <strong>#{id}</strong>
                                </p>
                                <div className="bg-white rounded p-3 text-xs font-mono text-gray-700">
                                    <div className="text-purple-600">const {'{ id }'} = useParams();</div>
                                    <div className="text-gray-500">// id = {id}</div>
                                </div>
                            </div>
                        </div>

                        {/* Todos List */}
                        <div className="space-y-3">
                            {todos.map((todo, index) => (
                                <div 
                                    key={todo.id}
                                    className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-200 p-5 flex items-start gap-4"
                                    style={{ 
                                        animation: `fadeIn 0.3s ease-out ${index * 30}ms both`
                                    }}
                                >
                                    {/* Checkbox */}
                                    <div className="flex-shrink-0 mt-1">
                                        <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center transition-all duration-200 ${
                                            todo.completed 
                                                ? 'bg-green-500 border-green-500' 
                                                : 'bg-white border-gray-300'
                                        }`}>
                                            {todo.completed && (
                                                <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                                                </svg>
                                            )}
                                        </div>
                                    </div>

                                    {/* Todo Content */}
                                    <div className="flex-1">
                                        <h3 className={`font-medium ${
                                            todo.completed 
                                                ? 'text-gray-400 line-through' 
                                                : 'text-gray-800'
                                        }`}>
                                            {todo.title}
                                        </h3>
                                        <div className="mt-2">
                                            <span className={`text-xs px-3 py-1 rounded-full font-medium ${
                                                todo.completed
                                                    ? 'bg-green-100 text-green-700'
                                                    : 'bg-orange-100 text-orange-700'
                                            }`}>
                                                {todo.completed ? '✓ Completed' : '⏳ Pending'}
                                            </span>
                                        </div>
                                    </div>

                                    {/* Task Number */}
                                    <div className="text-gray-400 text-sm font-medium">
                                        #{todo.id}
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Bottom Info Card */}
                        <div className="mt-8 bg-white rounded-xl shadow-lg p-6 text-center">
                            <p className="text-gray-600">
                                💡 Each todo item was fetched from the API endpoint: 
                            </p>
                            <code className="inline-block mt-2 bg-gray-100 px-4 py-2 rounded text-sm text-gray-700">
                                /users/{id}/todos
                            </code>
                        </div>

                        {/* Navigation Buttons */}
                        <div className="flex justify-between items-center mt-12 gap-4">
                            <Link to="/example">
                                <button className="px-6 py-3 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition-all duration-200 flex items-center gap-2">
                                    <span>←</span> Back to Users
                                </button>
                            </Link>
                            
                            <Link to="/conclusion">
                                <button className="px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-lg hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-200 flex items-center gap-2">
                                    Continue <span>→</span>
                                </button>
                            </Link>
                        </div>
                    </>
                )}
            </div>

            {/* CSS Animation */}
            <style>{`
                @keyframes fadeIn {
                    from {
                        opacity: 0;
                        transform: translateY(10px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }
            `}</style>
        </div>
    );
};

export default ExampleItemsPage;