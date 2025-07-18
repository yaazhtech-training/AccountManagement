import React, { useState } from 'react';
import axios from 'axios';
import { Mail, ShieldCheck } from 'lucide-react';

function ForgotPassword() {
  const [email, setEmail] = useState('');
  const [otp, setOtp] = useState('');
  const [step, setStep] = useState(1);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleSendOtp = async (e) => {
    e.preventDefault();
    setError('');
    try {
      await axios.post('http://localhost:8080/api/auth/send-otp', { email });
      setStep(2);
      setSuccess('✅ OTP sent to your email successfully!');
    } catch (err) {
      setError('❌ Failed to send OTP. Please check your email and try again.');
    }
  };

  const handleVerifyOtp = async (e) => {
    e.preventDefault();
    setError('');
    try {
      await axios.post('http://localhost:8080/api/auth/verify-otp', { email, otp });
      setSuccess('✅ OTP verified! Redirecting to reset password...');
      setTimeout(() => {
        window.location.href = `/reset-password?email=${email}`;
      }, 1500);
    } catch (err) {
      setError('❌ Invalid OTP. Please try again.');
    }
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center px-4 py-10 bg-cover bg-center"
      style={{ backgroundImage: "url('/images/forget-bg.jpg')" }}
    >
      <div className="bg-white bg-opacity-90 shadow-2xl rounded-3xl w-full max-w-4xl flex flex-col md:flex-row overflow-hidden">

        {/* Left Side - Black Background with White Text */}
        <div className="md:w-1/2 p-10 bg-black flex flex-col justify-center text-center text-white">
          <h2 className="text-3xl font-extrabold mb-4">🔐 Forgot Your Password?</h2>
          <p className="text-lg">
            Don’t worry! We’ll send a secure OTP to your email to help you reset it safely.
          </p>
          <img
            src="/images/email-verification.jpeg"
            alt="Email Verification"
            className="w-64 mx-auto mt-6 rounded-lg border border-white"
          />
        </div>

        {/* Right Side - OTP Form */}
        <div className="md:w-1/2 p-8 bg-white space-y-6">
          <h3 className="text-2xl font-bold text-blue-600 text-center">Reset Access</h3>

          {step === 1 && (
            <form onSubmit={handleSendOtp} className="space-y-4">
              <label className="block text-gray-700 font-medium">Email Address</label>
              <div className="relative">
                <Mail className="absolute left-3 top-3 text-gray-400" />
                <input
                  type="email"
                  className="w-full pl-10 pr-4 py-3 border border-blue-300 rounded-xl focus:ring-2 focus:ring-blue-400"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full py-3 bg-blue-500 text-white font-semibold rounded-xl hover:bg-blue-600 transition"
              >
                Send OTP
              </button>
            </form>
          )}

          {step === 2 && (
            <form onSubmit={handleVerifyOtp} className="space-y-4">
              <label className="block text-gray-700 font-medium">Enter OTP</label>
              <div className="relative">
                <ShieldCheck className="absolute left-3 top-3 text-gray-400" />
                <input
                  type="text"
                  className="w-full pl-10 pr-4 py-3 border border-green-300 rounded-xl focus:ring-2 focus:ring-green-400"
                  placeholder="Enter the OTP sent to your email"
                  value={otp}
                  onChange={(e) => setOtp(e.target.value)}
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full py-3 bg-green-500 text-white font-semibold rounded-xl hover:bg-green-600 transition"
              >
                Verify OTP
              </button>
            </form>
          )}

          {error && <p className="text-red-500 text-center font-medium">{error}</p>}
          {success && <p className="text-green-600 text-center font-medium">{success}</p>}
        </div>
      </div>
    </div>
  );
}

export default ForgotPassword;