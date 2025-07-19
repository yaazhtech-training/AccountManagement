import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { User, Mail, Lock } from 'lucide-react';
import { motion } from 'framer-motion';
import axios from 'axios';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:8070/account/api/login', {
        email,
        password,
      });

      if (response.status === 200) {
        alert("🎉 Login successful!");
        // Redirect or store token
      }
    } catch (error) {
      alert("❌ Invalid email or password");
      console.error(error);
    }
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center bg-cover bg-center px-4"
      style={{ backgroundImage: "url('/images/login-bg.jpg')" }}
    >
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="w-full max-w-4xl flex flex-col md:flex-row rounded-3xl shadow-2xl overflow-hidden bg-white bg-opacity-70 backdrop-blur-lg border border-purple-300"
      >
        {/* Left Section - Login Form */}
        <div className="md:w-1/2 p-10 text-black">
          <h2 className="text-3xl font-bold text-purple-800 mb-8 text-center">Login 🔐</h2>

          <form onSubmit={handleLogin} className="space-y-6">
            <div className="relative">
              <Mail className="absolute left-3 top-3.5 text-purple-500 w-5 h-5" />
              <input
                type="email"
                placeholder="Email Address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-10 py-3 rounded-xl bg-white text-black border border-purple-300 focus:outline-none focus:ring-2 focus:ring-purple-400"
                required
              />
            </div>

            <div className="relative">
              <Lock className="absolute left-3 top-3.5 text-purple-500 w-5 h-5" />
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-10 py-3 rounded-xl bg-white text-black border border-purple-300 focus:outline-none focus:ring-2 focus:ring-purple-400"
                required
              />
            </div>

            <div className="flex justify-end text-sm text-purple-600 hover:underline">
              <Link to="/forgot-password">Forgot Password?</Link>
            </div>

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-purple-500 to-indigo-500 hover:from-purple-600 hover:to-indigo-600 text-white font-semibold py-3 rounded-xl transition duration-300 shadow-md"
            >
              Login
            </button>
          </form>

          <p className="mt-6 text-sm text-center text-purple-700">
            Don’t have an account?{' '}
            <Link to="/signup" className="underline hover:text-purple-900">
              Sign up here
            </Link>
          </p>
        </div>

        {/* Right Section - Visual */}
        <div className="md:w-1/2 p-10 bg-gradient-to-tr from-purple-100 via-pink-100 to-indigo-100 flex flex-col justify-center items-center text-center">
          <motion.h2
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-4xl font-extrabold mb-4"
          >
            Welcome Back!
          </motion.h2>
          <p className="text-lg text-purple-800 font-medium">
            Unlock your account and access all your data securely.
          </p>
        </div>
      </motion.div>
    </div>
  );
}

export default Login;
