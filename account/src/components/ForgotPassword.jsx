import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';

function ForgotPassword() {
  const [email, setEmail] = useState('');
  const navigate = useNavigate();

  const handleSendOtp = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:8081/account/auth/forgot-password', {
        email,
      });
      alert('OTP sent to your email!');
      navigate('/otp-verification'); // redirect to OTP page
    } catch (error) {
      alert('Failed to send OTP. Please try again.');
    }
  };

  return (
    <div
      className="min-h-screen bg-cover bg-center flex items-center justify-center"
      style={{ backgroundImage: "url('/images/forget-bg.jpg')" }}
    >
      <div className="bg-white bg-opacity-90 rounded-2xl shadow-2xl flex w-3/4 max-w-4xl">
        {/* Left side - Form */}
        <div className="w-1/2 p-8">
          <h2 className="text-3xl font-bold text-blue-800 mb-4">Forgot Password?</h2>
          <p className="text-sm text-gray-600 mb-6">
            Enter your registered email. We'll send you an OTP to reset your password.
          </p>
          <form onSubmit={handleSendOtp}>
            <input
              type="email"
              placeholder="Email"
              className="w-full p-3 mb-6 border rounded-lg"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <button
              type="submit"
              className="w-full bg-blue-700 text-white py-3 rounded-lg hover:bg-blue-800 transition"
            >
              Send OTP
            </button>
          </form>
          <p className="text-sm text-gray-600 mt-6">
            Back to{" "}
            <Link to="/login" className="text-blue-700 font-semibold hover:underline">
              Login
            </Link>
          </p>
        </div>

        {/* Right side - Illustration or text */}
        <div className="w-1/2 bg-blue-700 text-white rounded-r-2xl flex flex-col justify-center items-center p-8">
          <h2 className="text-4xl font-bold mb-4">Password Recovery</h2>
          <p className="text-center">
            Stay secure. We'll help you get back into your account safely.
          </p>
        </div>
      </div>
    </div>
  );
}

export default ForgotPassword;
