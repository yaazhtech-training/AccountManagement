// src/components/OtpVerification.jsx

import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const OtpVerification = () => {
  const [otp, setOtp] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState('');
  const [timeLeft, setTimeLeft] = useState(60); // 60 seconds timer
  const navigate = useNavigate();

  // Countdown effect
  useEffect(() => {
    if (timeLeft === 0) return;

    const timer = setInterval(() => {
      setTimeLeft((prevTime) => prevTime - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [timeLeft]);

  const handleVerify = (e) => {
    e.preventDefault();

    if (otp === '123456' && timeLeft > 0) {
      setStatus('success');
      setMessage('✅ OTP verification successful! Redirecting...');

      setTimeout(() => {
        navigate('/dashboard'); // change route as needed
      }, 2000);
    } else if (timeLeft <= 0) {
      setStatus('error');
      setMessage('⏰ OTP expired. Please request a new one.');
    } else {
      setStatus('error');
      setMessage('❌ Invalid OTP. Please try again.');
    }
  };

  const handleResendOtp = () => {
    // Logic to resend OTP via email
    console.log("Resending OTP to user email...");
    setMessage("📧 A new OTP has been sent to your email.");
    setStatus('info');
    setTimeLeft(60); // reset timer
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gradient-to-r from-yellow-100 to-orange-200">
      <div className="bg-white p-10 rounded-2xl shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center">Email OTP Verification</h2>
        <form onSubmit={handleVerify} className="space-y-4">
          <div>
            <label className="block font-semibold">Enter OTP sent to your Email</label>
            <input
              type="text"
              maxLength="6"
              required
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
              className="w-full border rounded-md p-2"
            />
          </div>

          {/* Timer */}
          <div className="text-center text-gray-600 font-medium">
            {timeLeft > 0
              ? `⏱ OTP valid for: ${timeLeft} seconds`
              : `❌ OTP expired`}
          </div>

          <button
            type="submit"
            className="w-full bg-green-500 hover:bg-green-600 text-white font-bold py-2 rounded-md transition"
            disabled={timeLeft === 0}
          >
            Verify OTP
          </button>

          {/* Resend OTP Button */}
          {timeLeft === 0 && (
            <button
              type="button"
              onClick={handleResendOtp}
              className="w-full mt-2 bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 rounded-md transition"
            >
              Resend OTP
            </button>
          )}

          {/* Message Output */}
          {message && (
            <p className={`text-sm text-center mt-4 font-medium ${
              status === 'success' ? 'text-green-600' :
              status === 'error' ? 'text-red-600' : 'text-blue-600'
            }`}>
              {message}
            </p>
          )}
        </form>
      </div>
    </div>
  );
};

export default OtpVerification;
