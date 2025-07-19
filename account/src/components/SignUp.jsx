import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

const SignUp = () => {
  const [formData, setFormData] = useState({
    userName: '',
    email: '',
    password: '',
    confirmPassword: '',
    phoneNumber: ''
  });

  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Creating account and sending OTP to:", formData.email);

    setMessage("✅ Account created! Please verify your account through the email OTP.");

    setTimeout(() => {
      navigate('/otp-verification');
    }, 2000);
  };

  return (
    <div
      className="flex items-center justify-center h-screen bg-cover bg-center"
      style={{ backgroundImage: "url('/images/signup-bg.jpg')" }}
    >
      <div className="bg-white bg-opacity-90 p-10 rounded-2xl shadow-2xl w-full max-w-md backdrop-blur-md">
        <h2 className="text-3xl font-bold mb-6 text-center text-purple-700">Sign Up</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block font-semibold">User Name</label>
            <input type="text" name="userName" required value={formData.userName} onChange={handleChange}
              className="w-full border rounded-md p-2 focus:outline-none focus:ring focus:border-purple-300" />
          </div>
          <div>
            <label className="block font-semibold">Email</label>
            <input type="email" name="email" required value={formData.email} onChange={handleChange}
              className="w-full border rounded-md p-2 focus:outline-none focus:ring focus:border-purple-300" />
          </div>
          <div>
            <label className="block font-semibold">Phone Number</label>
            <input type="tel" name="phoneNumber" pattern="[0-9]*" required value={formData.phoneNumber} onChange={handleChange}
              className="w-full border rounded-md p-2 focus:outline-none focus:ring focus:border-purple-300" />
          </div>
          <div>
            <label className="block font-semibold">Password</label>
            <input type="password" name="password" required value={formData.password} onChange={handleChange}
              className="w-full border rounded-md p-2 focus:outline-none focus:ring focus:border-purple-300" />
          </div>
          <div>
            <label className="block font-semibold">Confirm Password</label>
            <input type="password" name="confirmPassword" required value={formData.confirmPassword} onChange={handleChange}
              className="w-full border rounded-md p-2 focus:outline-none focus:ring focus:border-purple-300" />
          </div>

          <button type="submit" className="w-full bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 rounded-md transition">
            Create Account
          </button>

          {/* ✅ Login link */}
          <p className="text-center text-sm text-gray-700 mt-4">
            Already have an account?{' '}
            <Link to="/login" className="text-purple-600 font-semibold hover:underline">
              Login
            </Link>
          </p>

          {message && (
            <p className="text-center text-green-600 font-medium mt-4">{message}</p>
          )}
        </form>
      </div>
    </div>
  );
};

export default SignUp;
