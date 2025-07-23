import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { User, Lock } from 'lucide-react';


function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    alert('Login attempted!');
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center bg-cover bg-center text-white font-sans"
      style={{ backgroundImage: "url('/images/login-bg.jpg')" }}

    >
      <div className="flex flex-col md:flex-row w-full max-w-5xl rounded-xl overflow-hidden shadow-2xl backdrop-blur-lg bg-purple-100 bg-opacity-60 border border-purple-300">
        
        {/* Left Side - Login Form */}
        <div className="md:w-1/2 p-10 bg-white bg-opacity-40 text-gray-900">
          <div className="flex flex-col items-center justify-center">
            <div className="bg-purple-300 p-4 rounded-full mb-6">
              <User className="w-8 h-8 text-purple-800" />
            </div>
            <h2 className="text-3xl font-bold mb-6">Login</h2>
          </div>

          <form onSubmit={handleLogin} className="space-y-6">
            <div className="relative">
              <input
                type="email"
                placeholder="Email"
                className="w-full px-10 py-3 rounded-md bg-white bg-opacity-80 text-gray-800 placeholder-gray-500 border border-purple-300 focus:outline-none focus:ring-2 focus:ring-purple-400"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <User className="absolute left-3 top-3.5 text-purple-400 w-5 h-5" />
            </div>

            <div className="relative">
              <input
                type="password"
                placeholder="Password"
                className="w-full px-10 py-3 rounded-md bg-white bg-opacity-80 text-gray-800 placeholder-gray-500 border border-purple-300 focus:outline-none focus:ring-2 focus:ring-purple-400"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <Lock className="absolute left-3 top-3.5 text-purple-400 w-5 h-5" />
            </div>

            <div className="flex items-center justify-between text-sm text-gray-700">
              <label className="flex items-center">
                <input type="checkbox" className="mr-2" />
                Remember me
              </label>
              <Link to="/forgot-password" className="text-purple-600 hover:underline">
                Forgot password?
              </Link>
            </div>

            <button
              type="submit"
              className="w-full bg-purple-500 hover:bg-purple-600 transition duration-300 text-white font-semibold py-2 rounded-md"
            >
              LOGIN
            </button>
          </form>
        </div>

        {/* Right Side - Welcome Message */}
        <div className="md:w-1/2 p-10 flex flex-col justify-center bg-gradient-to-tr from-purple-200 via-pink-100 to-indigo-100 text-purple-900 text-center">
          <h2 className="text-4xl font-extrabold mb-4">Welcome 🌸</h2>
          <p className="text-lg">
            Manage your account efficiently and securely with our Account Management System.
          </p>
          <p className="mt-6 text-sm">
            New here?{' '}
            <Link to="/signup" className="text-purple-700 hover:underline">
              Sign up now
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;